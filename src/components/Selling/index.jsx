import React from 'react'
import './selling.css'
import Card from '../Card'

const Selling = ({ products }) => {
  return (
    <div className='selling-wrapper'>
      <h2 className='selling-heading'>Top Selling</h2>
      <div className="row px-0 py-2 mt-4">
        {
          products.map((product, index) => {
            return <div key={index} className="col-md-3">
              <Card product={product} />
            </div>

          })
        }
      </div>
    </div>
  )
}

export default Selling