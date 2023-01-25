import React from 'react'
import styles from '../SignUp/signup.module.css'
import Header from '../../components/Header'
import gif from '../../assets/img/login.gif'
import Footer from '../../components/Footer'
import googicon from '../../assets/img/googicon.svg'

const SignupPage = () => {
  return (
    <>
      <div className='color' style={{ backgroundColor: 'black' }}>
        <div className="container">
          <Header />
        </div>
        <div className={`${styles.welcomeWrapper}`}>
          <div className={`row p-5 ${styles.row}`}>
            <div className={`col-md-4 ${styles.gif}`}>
              <img src={gif} alt="" />
            </div>
            <div className="col-md-4">
              <div className={styles.form}>
                <h2 className={styles.welcome}>Welcome !</h2>
                <input className={` my-2 p-1 py-2 px-3 ${styles.input} ${styles.inputafter}`} type="text" name='name' placeholder='Name' />
                <input className={` my-2 p-1 py-2 px-3 ${styles.input} ${styles.inputafter}`} type="text" name='contact' aria-label='phone number' placeholder='+92 |' />
                <button className={`${styles.login} my-3 p-1 py-2 px-3`}>Login</button>
                <h5 className={`${styles.h5} ${styles.h5bf} mt-3`}>or login with</h5>
                <a className={styles.a} href=""><img className={styles.googleicon} src={googicon} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    </>

  )
}

export default SignupPage