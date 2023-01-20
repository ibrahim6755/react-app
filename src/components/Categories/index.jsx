import React from 'react'
import categorycss from '../Categories/categories.css'
const Categories = ({ categories }) => {
  return (

    <div className='categories-wrapper my-5'>
      <h2 className='category-heading'>Browse Categories</h2>
      <div className="row px-5 py-3 mt-4">
        {
          categories.map(category => {
            return (
              <img className="col-md-2" src={category.catImg}></img>
            )

          })
        }
      </div>
    </div>
  )
}
export default Categories