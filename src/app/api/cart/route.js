import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Cart from "@/app/models/Cart";

// POST: Add to cart
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { userId, productId, name, price, quantity, image } = body;

    if (!userId || !productId || !name || !price) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, name, price, quantity, image }],
        total: price * (quantity || 1),
      });
    } else {
      // check if product exists in cart
      const existingItem = cart.items.find((item) => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        cart.items.push({ productId, name, price, quantity, image });
      }
      cart.total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    await cart.save();

    return NextResponse.json(cart, { status: 201 });
  } catch (error) {
    console.error("POST /api/cart error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET: Fetch cart by userId
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (userId) {
      const cart = await Cart.findOne({ userId });
      return NextResponse.json(cart || { userId, items: [], total: 0 }, { status: 200 });
    }

    // if no userId, return all carts
    const carts = await Cart.find();
    return NextResponse.json(carts, { status: 200 });
  } catch (error) {
    console.error("GET /api/cart error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
