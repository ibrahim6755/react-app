import React from 'react'
import styles from '../Categories/categories.module.css'
const Categories = ({ categories }) => {
  return (

    <div className='categories-wrapper my-5'>
      <h2 className={styles.categoryHeading}>Browse Categories</h2>
      <div className="row px-5 py-3 mt-4">
        {
          categories.map((category, index) => {
            return (
              <img key={index} className="col-md-2" src={category.catImg}></img>
            )

          })
        }

      </div>
    </div>
  )
}
export default Categories