import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const url =
        activeCategory === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${activeCategory}`;

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <div className="page-wrapper">
      <Nav />

      <main className="shop-container">
        {/* Categories */}
        <div className="categories-row">
          <button
            className={activeCategory === "all" ? "active-category" : ""}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active-category" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`} // ✅ Dynamic route
                key={product.id}
                className="product-link"
              >
                <div className="product-card">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p className="price">{product.price} ETB</p>
                  <p className="rating">⭐ {product.rating?.rate}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Shop;