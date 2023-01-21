import React from 'react'
import Categories from '../components/Categories'
import Selling from '../components/Selling'
import Slider from '../components/Slider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products, categories, sliders } from '../data/data'

const Home = () => {
  return (
    <>
      <div className='container'>
      <Header/>
        <Slider sliders={sliders} />
        <Categories categories={categories} />
        <Selling products={products} />
      </div>
      <Footer />
    </>
  )
}
export default Home