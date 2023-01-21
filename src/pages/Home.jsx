import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Selling from '../components/Selling'
import Slider from '../components/Slider';
import { products, categories, sliders } from '../data/data'

const Home = () => {
  return (
   <>
    <div>
      <Header />
      <Slider sliders={sliders} />
      <Categories categories={categories} />
      <Selling products={products} />
      <Footer style={{backgroundColor:'#1C1816'}}/>
    </div>
    
   </>
  )
}
export default Home