import React from 'react'
import styles from './footer.module.css'
import logo from '../../assets/img/logo.png'
import you from '../../assets/img/you.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'

const Footer = () => {
    return (

        <div className='footer-wrapper'>
            <div className="row mt-5 py-5">
                <div className={styles.socialMedia}>
                    <div className=" me-5">
                        <img className={styles.logoImg} src={logo} alt="" />
                    </div>
                    <div className="icons ms-4">
                        <p className={styles.findUsTxt}>Find us on</p>
                        <img className={styles.w46} src={you} alt="" />
                        <img className={`mx-4 ${styles.w46}`} src={insta} alt="" />
                        <img className={styles.w46} src={face} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer