import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { WishlistContext } from "../context/WishlistContextValue";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (
    <div className="page-wrapper">
      <Nav />

      <main className="wishlist-container">
        <h1>Your Wishlist ❤️</h1>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <p>No items in your wishlist.</p>
            <Link to="/shop" className="go-shop">
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <div key={product.id} className="wishlist-card">
                
                {/* Remove button */}
                <button
                  className="remove-btn"
                  onClick={() => toggleWishlist(product)}
                >
                  ❌
                </button>

                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                </Link>

                <p className="price">{product.price} ETB</p>

                <p className="rating">⭐ {product.rating?.rate}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Wishlist;