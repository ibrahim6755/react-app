import React from 'react'
import Categories from '../components/Categories'
import Selling from '../components/Selling'
import Slider from '../components/Slider';
import { products, categories, sliders } from '../data/data'

const Home = () => {
  return (
    <>
      <div>
        <Slider sliders={sliders} />
        <Categories categories={categories} />
        <Selling products={products} />
      </div>
    </>
  )
}
export default Home