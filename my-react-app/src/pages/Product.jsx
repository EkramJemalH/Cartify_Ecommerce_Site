import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);

      // Fetch related products (same category)
      const relatedRes = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const relatedData = await relatedRes.json();
      // exclude current product
      setRelatedProducts(relatedData.filter((p) => p.id !== data.id));
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="page-wrapper">
      <Nav />

      <main className="product-container">
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
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="add-cart">Add to Cart</button>
          </div>
        </div>

        <div className="product-bottom-section">
          {/* Tabs */}
          <div className="product-tabs">
            <button
              className={activeTab === "description" ? "active-tab" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={activeTab === "reviews" ? "active-tab" : ""}
              onClick={() => setActiveTab("reviews")}
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
                  Array.from({ length: Math.min(3, product.rating.count) }).map(
                    (_, index) => (
                      <div key={index} className="review">
                        <p>
                          <strong>User {index + 1}</strong> ⭐{" "}
                          {product.rating?.rate}
                        </p>
                        <p>This is a review comment example.</p>
                        <p className="review-date">Feb 25, 2026</p>
                      </div>
                    )
                  )
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2>You Might Also Like This</h2>
              <div className="related-grid">
                {relatedProducts.slice(0, 4).map((rel) => (
                  <Link to={`/product/${rel.id}`} key={rel.id} className="related-card">
                    <img src={rel.image} alt={rel.title} />
                    <p>{rel.title}</p>
                    <p className="price">{rel.price} ETB</p>
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