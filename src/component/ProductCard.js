import React, { useEffect, useState } from "react";
import '../component/ProductCard.css'
import {add, remove} from '../store/cartSlice'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
// import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  // const { addToCart } = useCart();

  const [show, setShow] = useState(true)

  const {id, name, price, image} = product;

  const products = useSelector(state => state.cartState.cartList)

  useEffect(() => {
    const productIsInCart = products.find(cartItem => cartItem.id === id);

    if(productIsInCart){
      setShow(false);
    } else {
      setShow(true);
    }

  }, [products, id]);

  return (

      <>
      <div className="productCard">
      <img src={image} alt={name} />
      <p className="name" >{name}</p>

      <div className="actions">
        <p>${price}</p>
        
        {show ? (<button onClick={() => {dispatch(add(product))}}>Add to Cart</button>) : 
          (<button className="remove" onClick={() => {dispatch(remove(product))}}>Remove</button>)}

        {/* {show ? (<button onClick={() => addToCart(product)}>Add to Cart</button>) : 
          (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>)}  */}

        {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
      </div>
    </div>
      </>

  );
};
