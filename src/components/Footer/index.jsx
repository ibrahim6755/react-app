import React from 'react'
import styles from './footer.module.css'
import logo from '../../assets/img/logo.png'
import you from '../../assets/img/you.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'
import app from '../../assets/img/app.png'
import googlestore from '../../assets/img/googleStore.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={`${styles.footerWrapper} px-5`}>
            <div className="content container">
                <div className="row mt-3 py-5 ">
                    <div className={styles.socialMedia}>
                        <div className=" me-5">
                            <a href='#'><img className={styles.logoImg} src={logo} alt="" /></a>
                        </div>
                        <div className={` ms-4 ${styles.icons}`}>
                            <p className={styles.findUsTxt}>Find us on</p>
                            <a href='https://www.youtube.com/channel/UCg4hfdWApV0Uea6aFW7PZUg'><img className={styles.w46} src={you} alt="" /></a>
                            <a href='https://www.instagram.com/kfcpakistanofficial/?hl=en'><img className={` ${styles.w46} ${styles.mX}`} src={insta} alt="" /></a>
                            <a href='https://www.facebook.com/KFCPakistan/'><img className={styles.w46} src={face} alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="row ">
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
                    <div className={`col-md-3 col-sm-6 ${styles.download}`}>
                        <Link className={`${styles.textDecor}`} href=""><img className='mb-4' src={app} alt="" /></Link>
                        <Link className={`${styles.textDecor}`} href=""><img src={googlestore} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer