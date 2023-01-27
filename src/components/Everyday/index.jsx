import React from 'react'
import Card from '../Card'
import styles from '../Everyday/styles.module.css'
import {products} from '../../data/data'

const Everyday = () => {
  return (
    <div className='selling-wrapper'>
      <h2 className={`${styles.Heading} ${styles.HeadingAfter}`}>Everyday Value</h2>
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

export default Everyday