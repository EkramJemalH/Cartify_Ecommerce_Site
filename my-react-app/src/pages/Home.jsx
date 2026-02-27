import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PopularProducts from "../components/PopularProducts";
import hero from "../assets/hero.webp";
import category1 from "../assets/electronic.png";
import category2 from "../assets/cosmotic.avif";
import category3 from "../assets/book.png";
import "./Home.css";
import { FaTruck, FaTrophy, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
    // Home.jsx
    return (
        <div className="page-wrapper">
            <Nav />
            <main className="main-content">
                <section className="hero">
                    <div className="left-hero">
                    <h1>Everything You Need, All in One Place</h1>
                    <p>Shop unique items and enjoy fast delivery</p>
                    <button className="shop-now">Shop Now</button>
                    </div>
                    <div className="right-hero">
                        <img src={hero} alt="hero" className="hero-img"/>
                    </div>
                </section>
                <section className="categories">
                    <div className="categories-header">
                    <h1>Shop by Categories</h1>
                    <a href="#">See All</a>
                    </div>
                    <div className="categories-container">
                        <div className="category">
                            <img src={category1} alt="category1" className="category-img"/>
                            <h2>Electronics</h2>
                        </div>
                        <div className="category">
                            <img src={category2} alt="category2" className="category-img"/>
                            <h2>Beauty</h2>
                        </div>
                        <div className="category">
                            <img src={category3} alt="category3" className="category-img"/>
                            <h2>Books</h2>
                        </div>
                    </div>
                </section>
                <PopularProducts/>
                <section className="aboutUs">
  <h1>Why Choose Us?</h1>
  <div className="aboutUs-container">
    <div className="aboutUs-card">
      <i className="fas fa-truck fa-2x"></i>
      <p>We make sure your orders reach you quickly and safely, with real-time tracking so you always know where your package is.</p>
    </div>
    <div className="aboutUs-card">
      <i className="fas fa-trophy fa-2x"></i>
      <p>Every item on our platform is carefully selected and reviewed to ensure you receive only high-quality, reliable products.</p>
    </div>
    <div className="aboutUs-card">
      <i className="fas fa-lock fa-2x"></i>
      <p>Your information is always protected. Enjoy smooth checkout with trusted and secure payment options.</p>
    </div>
  </div>
</section> 
<section className="testimonials">
  <h1>Testimonials</h1>
  <div className="testimonials-container">
    <div className="testimonial-card">
      <p>“I found exactly what I needed, and the delivery was faster than I expected. The whole process was smooth and stress-free”</p>
      <p><strong>— Sarah K.</strong></p>
    </div>
    <div className="testimonial-card">
      <p>“The quality of the products really impressed me. I’ve ordered multiple times and everything arrived in perfect condition.”</p>
      <p><strong>— Michael B.</strong></p>
    </div>
    <div className="testimonial-card">
      <p>“The quality of the products really impressed me. I’ve ordered multiple times and everything arrived in perfect condition.”</p>
      <p><strong>— Emily R.</strong></p>
    </div>
  </div>
</section>      
                     </main>
            <Footer />
        </div>
    );
}
export default Home;