import React from 'react'
import styles from '../Categories/categories.module.css'
import {Link} from 'react-router-dom'
const Categories = ({ categories }) => {
  return (

    <div className='categories-wrapper my-5'>
      <h2 className={styles.categoryHeading}>Browse Categories</h2>
      <div className="row px-5 py-3 mt-4">
        {
          categories.map((category, index) => {
            return (
             <Link to="/category"><img className="col-md-2 col-sm-4 categoryImg" key={index} src={category.catImg}></img></Link>
            )

          })
        }
      </div>
    </div>
  )
}
export default Categories