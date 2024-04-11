import React from 'react'
import { CartCard } from '../component/CartCard'
import { useCart } from '../context/CartContext'

export const Cart = () => {

  const {total, cartList} = useCart();

  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img"},
  //   {id: 2, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img2"}
  // ]

  return (
    <>
      <section className='cart'>
        <h1>Cart Items : {cartList.length} / ${total} </h1>
        {cartList.map((product) => (
           <CartCard key={product.id} product={product}/>
      ))}
        </section>
    </>
  )
}
