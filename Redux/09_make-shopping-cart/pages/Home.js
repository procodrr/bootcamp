import React from 'react'
import Product from '../components/Product'
import { useSelector } from '../my-react-redux'

export default function Home() {
  const productsList = useSelector((state) => state.products)
  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  )
}
