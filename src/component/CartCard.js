import React from 'react'
// import { useCart } from '../context/CartContext';
import '../component/CartCard.css'
import {remove} from '../store/cartSlice'
import {useDispatch } from 'react-redux'

export const CartCard = ({product}) => {

  // const { removeFromCart } = useCart()

  const {image, name, price} = product;

  const dispatch = useDispatch();

  return (

    <div className='cartCard m-5'>
         <img src={image} alt='HeadSet'/>
          <p className='productName'>{name}</p>
          <p className='productPrice'>{price}</p>
          <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>

  )
}

