import React from 'react'
import styles from './footer.module.css'
import logo from '../../assets/img/logo.png'
import you from '../../assets/img/you.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'
import app from '../../assets/img/app.png'
import googlestore from '../../assets/img/googleStore.png'

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className="row mt-5 py-5">
                <div className={styles.socialMedia}>
                    <div className=" me-5">
                        <a href=""><img className={styles.logoImg} src={logo} alt="" /></a>
                    </div>
                    <div className="icons ms-4">
                        <p className={styles.findUsTxt}>Find us on</p>
                        <a href=""><img className={styles.w46} src={you} alt="" /></a>
                        <a href=""><img className={`mx-4 ${styles.w46}`} src={insta} alt="" /></a>
                        <a href=""><img className={styles.w46} src={face} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li className={`${styles.listStyle} mb-2`}><h5 className={styles.fntweight}>Information</h5></li>
                        <li className={`${styles.listStyle} mb-2`}><a className={`${styles.textDecor} ${styles.aHover}`} href="">About Us</a></li>
                        <li className={`${styles.listStyle} mb-2`}><a className={`${styles.textDecor} ${styles.aHover}`} href="">Mitao Bhook</a></li>
                        <li className={`${styles.listStyle} mb-2`}><a className={`${styles.textDecor} ${styles.aHover}`} href="">Mitao Bhook - Scholarship</a></li>
                        <li className={`${styles.listStyle} mb-2`}><a className={`${styles.textDecor} ${styles.aHover}`} href="">Privacy Policy</a></li>
                        <li className={`${styles.listStyle} mb-2`}><a className={`${styles.textDecor} ${styles.aHover}`} href="">Careers</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className={styles.listStyle}><h5 className={styles.fntweight}>Locations</h5></li>
                        <li className={styles.listStyle}><a className={`${styles.textDecor} ${styles.aHover}`} href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className={styles.listStyle}><h5 className={styles.fntweight}>Get in Touch</h5></li>
                        <li className={styles.listStyle}><a className={`${styles.textDecor} ${styles.aHover}`} href="">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <a className={`${styles.textDecor} ${styles.aHover}`} href=""><img className='mb-4' src={app} alt="" /></a>
                    <a className={`${styles.textDecor} ${styles.aHover}`} href=""><img src={googlestore} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer