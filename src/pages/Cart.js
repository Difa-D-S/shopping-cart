import React from 'react'
import { CartCard } from '../component/CartCard'
// import { useCart } from '../context/CartContext'
import {useSelector} from 'react-redux'

export const Cart = () => {

  // const {total, cartList} = useCart();

  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img"},
  //   {id: 2, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img2"}
  // ]

  const products = useSelector(state => state.cartState.cartList)
  const total = useSelector(state => state.cartState.total)
  
  return (
    <>
      <section className='cart'>
        <h1>Cart Items : {products.length} / ${total} </h1>
        {products.map((product) => (
           <CartCard key={product.id} product={product}/>
      ))}
        </section>
    </>
  )
}
