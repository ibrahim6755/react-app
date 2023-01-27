import React from 'react'
import styles from '../secondNav/styles.module.css'
import { Link } from 'react-router-dom'

const SecondaryNav = () => {
    return (
        <div className="secondary-nav-wrapper">
            <ul className={`${styles.ul} px-5`}>
                <li className={`${styles.listStyle} py-2 px-3 mb-3 mx-2`}><Link className={`${styles.textDecor} fs-6 ${styles.textDecorhover}`} href="">Everyday Value</Link></li>
                <li className={`${styles.listStyle} py-2 px-3 mb-3 mx-2`}><Link className={`${styles.textDecor} fs-6 ${styles.textDecorhover}`} href="">Ala Carte & Combos</Link></li>
                <li className={`${styles.listStyle} py-2 px-3 mb-3 mx-2`}><Link className={`${styles.textDecor} fs-6 ${styles.textDecorhover}`} href="">Signature Boxes</Link></li>
                <li className={`${styles.listStyle} py-2 px-3 mb-3 mx-2`}><Link className={`${styles.textDecor} fs-6 ${styles.textDecorhover}`} href="">Sharing</Link></li>
                <li className={`${styles.listStyle} py-2 px-3 mb-3 mx-2`}><Link className={`${styles.textDecor} fs-6 ${styles.textDecorhover}`} href="">Snacks & Beverages</Link></li>
                <li className={`${styles.listStyle} py-2 px-3 mb-3 mx-2`}><Link className={`${styles.textDecor} fs-6 ${styles.textDecorhover}`} href="">Midnight</Link></li>
            </ul>
        </div>
    )
}

export default SecondaryNav