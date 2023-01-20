import React from 'react'
import logo from '../../assets/img/logo.png';
import deliveryLogo from '../../assets/img/delivery.png'
import bucket from '../../assets/img/bucket.png'
import pickup from '../../assets/img/pickup.png'
import header from '../Header/header.css'
const Header = () => {
    return (
       <>
        <div className="header-wrapper py-3 mb-3">
            <div className="left-nav">
                <div className="logo">
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                <button className=' delivery-btn text-uppercase  ms-5 p-1 py-2 px-3'><img src={deliveryLogo} alt="" /> delivery</button>
                <button className=' pickup-btn text-uppercase  p-1 py-2 px-3'> <img src={pickup} alt="" /> pickup</button>
            </div>
            <div className="right-nav">
                <button className='location ms-5 p-1 py-2 px-3 fs-6'>
                    <label for="location"><i class="bi bi-compass ps-1 loc-icon fs-5"></i> <span className='ms-3'>Select Location <i class=" loc bi bi-caret-down-fill ps-1"></i></span> </label>
                </button>
                <button className='cart ms-3 p-1 py-2 px-3 '><img className='bucket' src={bucket} alt="" /></button>
                <button className='register-btn ms-3 p-1 py-2 px-3'>Register/Sign in</button>
            </div>
        </div>
       
       </>
    )
}
export default Header