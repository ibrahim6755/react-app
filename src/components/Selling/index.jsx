import React from 'react'
import styles from './selling.module.css'
import Card from '../Card'

const Selling = ({ products }) => {
  return (
    <div className='selling-wrapper'>
      <h2 className={styles.sellingHeading}>Top Selling</h2>
      <div className="row px-0 py-2 mt-4">
        {
          products.map((product, index) => {
            return <div key={index} className="col-md-6 col-sm-6 col-lg-4 col-xl-3">
              <Card product={product} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Selling