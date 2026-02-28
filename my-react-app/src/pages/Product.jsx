import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Fetch product + related products
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const data = await res.json();
        setProduct(data);

        // Fetch related products (same category)
        const relatedRes = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        const relatedData = await relatedRes.json();

        // Exclude current product
        const filtered = relatedData.filter(
          (p) => p.id !== data.id
        );

        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1);
  }, [id]);

  // Add to cart function
  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const productExists = existingCart.find(
      (item) => item.id === product.id
    );

    if (productExists) {
      productExists.quantity += quantity;
    } else {
      existingCart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <Nav />
        <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
          Loading...
        </h2>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page-wrapper">
        <Nav />
        <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
          Product not found
        </h2>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Nav />

      <main className="product-container">
        {/* Top Section */}
        <div className="product-top-section">
          <div className="product-left">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-right">
            <h1>{product.title}</h1>
            <p className="price">{product.price} ETB</p>
            <p>⭐ {product.rating?.rate}</p>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <button
                onClick={() =>
                  quantity > 1 && setQuantity(quantity - 1)
                }
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>
            </div>

            <button
              className="add-cart"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="product-bottom-section">
          {/* Tabs */}
          <div className="product-tabs">
            <button
              className={
                activeTab === "description"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setActiveTab("description")
              }
            >
              Description
            </button>

            <button
              className={
                activeTab === "reviews"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setActiveTab("reviews")
              }
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "description" && (
              <p>{product.description}</p>
            )}

            {activeTab === "reviews" && (
              <div className="reviews">
                {product.rating?.count ? (
                  Array.from({
                    length: Math.min(
                      3,
                      product.rating.count
                    ),
                  }).map((_, index) => (
                    <div
                      key={index}
                      className="review"
                    >
                      <p>
                        <strong>
                          User {index + 1}
                        </strong>{" "}
                        ⭐ {product.rating?.rate}
                      </p>
                      <p>
                        This is a review comment
                        example.
                      </p>
                      <p className="review-date">
                        Feb 25, 2026
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2>
                You Might Also Like This
              </h2>

              <div className="related-grid">
                {relatedProducts
                  .slice(0, 4)
                  .map((rel) => (
                    <Link
                      to={`/product/${rel.id}`}
                      key={rel.id}
                      className="related-card"
                    >
                      <img
                        src={rel.image}
                        alt={rel.title}
                      />
                      <p>{rel.title}</p>
                      <p className="price">
                        {rel.price} ETB
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Product;