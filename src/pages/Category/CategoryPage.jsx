import React from 'react'
import Header from '../../components/Header'
import styles from '../Category/styles.module.css'
import SecondaryNav from '../../components/secondNav/SecondaryNav'
import Everyday from '../../components/Everyday'

const CategoryPage = () => {
  return (
    <>
      <div className={styles.black}>
        <div className="container">
          <Header />
          <SecondaryNav />
          <Everyday/>
        </div>
      </div>
    </>
  )
}

export default CategoryPage