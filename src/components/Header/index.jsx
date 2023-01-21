import React from 'react'
import logo from '../../assets/img/logo.png';
import deliveryLogo from '../../assets/img/delivery.png'
import bucket from '../../assets/img/bucket.png'
import pickup from '../../assets/img/pickup.png'
import header from '../Header/header.css'
const Header = () => {
    return (
        <>
            <div className="header-wrapper py-3 mb-3 sticky-top">
                <div className="left-nav">
                    <div className="logo">
                        <a href=""><img src={logo} alt="" /></a>
                    </div>
                    <button className=' delivery-btn text-uppercase  ms-3 p-1 py-2 px-3'><img src={deliveryLogo} alt="" /> delivery</button>
                    <button className=' pickup-btn text-uppercase  p-1 py-2 px-3'> <img src={pickup} alt="" /> pickup</button>
                </div>
                <div className="right-nav">
                    <button className='location ms-5 p-1 py-2 px-3 fs-6'>
                        <label htmlFor="location"><i className="bi bi-compass ps-1 loc-icon fs-5"></i> <span className='ms-3'>Select Location <i className=" loc bi bi-caret-down-fill ps-1"></i></span> </label>
                    </button>
                    <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img className='bucket' src={bucket} alt="" /></button>

                    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header pt-4">
                            <h5 id="offcanvasRightLabel"><img className='bucket' src={bucket} alt="" /> Your Bucket</h5>
                            <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-lg cross fs-5"></i></button>
                        </div>
                        <div className="offcanvas-body">

                            <div className="no-item">
                                <i className="bi bi-cart3 cart"></i>
                                <h5>You havent added any items in bucket yet</h5>
                            </div>
                        </div>
                    </div>

                    <button className='register-btn ms-3 p-1 py-2 px-3'>Register/Sign in</button>
                </div>
            </div>

        </>
    )
}
export default Header