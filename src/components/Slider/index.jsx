import React from 'react'
import styles from '../Slider/slider.module.css'

const Slider = ({ sliders }) => {
    return (
        <div className='slider-wrapper'>
            {
                sliders.map((slider,index) => {
                    return (
                        <div key={index} id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slider.slideImg} className="d-block w-100 rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Slider