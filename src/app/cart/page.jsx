'use client';
import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch('/api/cart');
        if (!res.ok) throw new Error("Failed to fetch cart");
        const data = await res.json();
        setCart(data);
      } catch (err) {
        console.error('Error fetching cart:', err);
        setError('Unable to load cart. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Remove item from cart
  const removeItem = async (id) => {
    try {
      const res = await fetch(`/api/cart/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error("Failed to delete item");
      setCart(cart.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Error removing item:', err);
      setError('Failed to remove item. Try again.');
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (loading) {
    return <p className="text-center py-10">Loading cart...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 py-10">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Item Info */}
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-800 font-medium">
                  ${item.price} × {item.quantity} ={" "}
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeItem(item._id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={22} />
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center border-t pt-4">
            <h2 className="text-2xl font-bold">Total:</h2>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout */}
          <button
            disabled={cart.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-medium transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
