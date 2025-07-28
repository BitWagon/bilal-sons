// app/api/contact/route.js
import connectDB from '@/config/db'; 
import Contact from '@/app/models/Contact'; 

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    const newContact = await Contact.create({ name, email, message });

    return new Response(JSON.stringify({ success: true, contact: newContact }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
