import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Home.css";
function Home() {
    // Home.jsx
    return (
        <div className="page-wrapper">
            <Nav />
            <main className="main-content">
                <section className="hero">
                    <h1>Everything You Need, All in One Place</h1>
                    <p>Shop unique items and enjoy fast delivery</p>
                    <button className="shop-now">Shop Now</button>
                    <div className="hero-image">
                        <img src="" alt="" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
export default Home;