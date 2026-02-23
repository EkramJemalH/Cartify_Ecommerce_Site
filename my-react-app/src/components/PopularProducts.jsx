import { useState, useEffect } from "react";
import "./PopularProduct.css";
function PopularProducts(){
const [products,setProducts]=useState([]);
useEffect(()=>{
    async function fetchProducts(){
        const res=await fetch("https://dummyjson.com/products");
        const data=await res.json();
        //sort by rating 
        const popular = data.products.sort((a,b)=>b.rating - a.rating).slice(0,6);
        setProducts(popular);
    }
    fetchProducts();
},[]);
    return(
       <div className="popular-products">
  <h1>Popular Products</h1>

  <div className="products-container">
    {products.map(product => (
      <div className="product-card" key={product.id}>
        <img src={product.thumbnail} alt={product.title} className="product-img" />
        <p className="product-title">{product.title}</p>
        <p className="product-price">{product.price} BIRR</p>
      </div>
    ))}
  </div>
</div>
    )
}
export default PopularProducts
