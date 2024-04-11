import React from "react";
import { ProductCard } from "../component/ProductCard";
import { Row } from 'react-bootstrap';

export const Home = () => {
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth",
      price: 149,
      image: "/assests/Image/img1.jpeg",
    },
    {
      id: 2,
      name: "Sony Wh-Ch510 Bluetooth",
      price: 149,
      image: "/assests/Image/img2.jpeg",
    },
    {
      id: 3,
      name: "Sony Wh-Ch510 Bluetooth",
      price: 149,
      image: "/assests/Image/img3.jpeg",
    },
    {
      id: 4,
      name: "Sony Wh-Ch510 Bluetooth",
      price: 149,
      image: "/assests/Image/img4.jpeg",
    },
    {
      id: 5,
      name: "Sony Wh-Ch510 Bluetooth",
      price: 149,
      image: "/assests/Image/img6.jpeg",
    },
   
    {
      id: 6,
      name: "Sony Wh-Ch510 Bluetooth",
      price: 149,
      image: "/assests/Image/img4.jpeg",
    },
    {
      id: 7,
      name: "Sony Wh-Ch510 Bluetooth",
      price: 149,
      image: "/assests/Image/img2.jpeg",
    },
  ];

  return (
    <>
      <main>
        <section>
          <Row>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </Row>
        </section>
      </main>
    </>
  );
};
