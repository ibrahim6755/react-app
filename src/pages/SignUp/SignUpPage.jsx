import React from 'react'
import styles from '../SignUp/signup.module.css'
import Header from '../../components/Header'
import gif from '../../assets/img/login.gif'

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
              <input className={`my-2 p-1 ${styles.input}`} type="text" />
              <input className={`my-2 p-1 ${styles.input}`} type="text" />
              <button></button>
              <h5>or login with</h5>
              <a href=""><img src="" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>

  )
}

export default SignupPage