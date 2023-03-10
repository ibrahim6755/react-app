import React from "react";
import styles from './card.module.css'
import { Link } from 'react-router-dom'
function Card({ product }) {
    return (
        <>
            <Link className={styles.decor} to="/top-selling">
                <div className={`h-95 w-100 ${styles.card} ${styles.cPointer} mt-3`}>
                    <img src={product.img} className={`card-img-top ${styles.cardImg} ${styles.cardImgHover}`} alt="..." />
                    <div className="card-body" >
                        <h4 className={styles.cardTitle}>{product.title}</h4>
                        <p className={` mb-4 ${styles.cardText}`}>{product.description}</p>
                        <div className={styles.flex}>
                            <h3 ><span className="pe-2">Rs</span>{product.price}</h3>
                            <Link to="#" className={`btn  w-100 ms-4 ${styles.cardBucket} ${styles.cardBucketHover}`}>Add to bucket</Link>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )

}


export default Card