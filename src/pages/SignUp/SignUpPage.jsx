import React from 'react'
import styles from '../SignUp/signup.module.css'
import Header from '../../components/Header'

const SignupPage = () => {
  return (
    <>
      <div className='color' style={{ backgroundColor: 'black' }}>
        <div className="container">
          <Header />
        </div>
        <div className={styles.welcomeWrapper}>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
     
    </>

  )
}

export default SignupPage