import React from 'react'
import { useCart } from '../context/CartContext';
import '../component/CartCard.css'

export const CartCard = ({product}) => {

  const { removeFromCart } = useCart()

  const {image, name, price} = product;
  return (

    <div className='cartCard'>
         <img src={image} alt='HeadSet'/>
          <p className='productName'>{name}</p>
          <p className='productPrice'>{price}</p>
          <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>

  )
}

