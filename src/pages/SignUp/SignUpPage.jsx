import React from 'react'
import styles from '../SignUp/signup.module.css'
import Header from '../../components/Header'
import gif from '../../assets/img/login.gif'
import Footer from '../../components/Footer'
import googicon from '../../assets/img/googicon.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SignupPage = () => {

  const { handleSubmit, handleReset, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      name: '',
      contact: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Please provide atleast 3 characters')
        .max(20, 'Long names are not allowed')
        .required('Name cannot be Empty'),
      contact: Yup.number().required('Please provide Number').min(11)

    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })


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
                <input className={` my-2 p-1 py-2 px-3 ${styles.input} ${styles.inputafter}`} onChange={handleChange} onBlur={handleBlur} value={values.name} type="text" name='name' placeholder='Name' />
                <p style={{ color: 'red' }}>{touched.name && errors.name ? errors.name : null}</p>
                <input className={` my-2 p-1 py-2 px-3 ${styles.input} ${styles.inputafter}`} onChange={handleChange} onBlur={handleBlur} value={values.contact} type="text" name='contact' aria-label='phone number' placeholder='+92 |' />
                <p style={{ color: 'red' }}>{touched.contact && errors.contact ? errors.contact : null}</p>
                <button className={`${styles.login} my-3 p-1 py-2 px-3`} onSubmit={handleSubmit}>Login</button>
                <h5 className={`${styles.h5} ${styles.h5bf} mt-3`}>or login with</h5>
                <a className={styles.a} href=""><img className={styles.googleicon} src={googicon} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>

  )
}

export default SignupPage