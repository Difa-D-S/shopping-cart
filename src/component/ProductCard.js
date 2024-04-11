import React from "react";
import { useCart } from "../context/CartContext";
import '../component/ProductCard.css'

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (

      <div className="productCard">
      <img src={product.image} alt={product.name} />
      <p className="name" >{product.name}</p>

      <div className="actions">
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>

  );
};
