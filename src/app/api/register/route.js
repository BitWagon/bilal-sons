import User from '@/models/user';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    await mongoose.connect(process.env.MONGODB_URI);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const newUser = await User.create({ name, email, password });
    return NextResponse.json({ message: 'User registered', user: newUser });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
