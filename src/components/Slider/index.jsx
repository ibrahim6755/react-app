import React from 'react'
import carousel1 from '../../assets/img/car1.jpg'
import carousel2 from '../../assets/img/car2.jpg'
import carousel3 from '../../assets/img/car3.png'

const Slider = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={carousel1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={carousel3} class="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}
export default Slider