import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Cart from "@/app/models/Cart";

// DELETE item by ID
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    await Cart.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
