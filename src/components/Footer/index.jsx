import React from 'react'
import './footer.css'
import logo from '../../assets/img/logo.png'
import you from '../../assets/img/you.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="row mt-5 py-5">
            <div className="social-media">
                <div className="logo me-5">
                    <img src={logo} alt="" />
                </div>
                <div className="icons ms-4">
                    <p className='find-us-txt'>Find us on</p>
                    <img className='w-46' src={you} alt="" />
                    <img className='w-46 mx-4' src={insta} alt="" />
                    <img className='w-46' src={face} alt="" />
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Footer