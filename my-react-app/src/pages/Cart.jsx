import "./Cart.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Increment quantity
  const increment = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Decrement quantity
  const decrement = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="page-wrapper">
      <Nav />

      <main className="main-content cart-container">
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="cart-details">
                    <h3>{item.title}</h3>
                    <p>{item.price} ETB</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decrement(item.id)
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increment(item.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>
                Total: {totalPrice.toFixed(2)} ETB
              </h2>
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cart;