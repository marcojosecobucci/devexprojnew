import React from 'react'
import BtnAll from '../button/BtnAll'
import imgCar from '../../img/carouselImg.svg'
import Carousel from 'react-bootstrap/Carousel'
const MyCarousel = () => {
    return (
        <div className='container-carousel'>
            <div className="circle"></div>
            <div className="img-carousel">
            <Carousel controls={false} indicators={false} pause={false}>
                    <Carousel.Item interval={3000}>
                    
                <img src={imgCar} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        
                <img src={imgCar} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        
                <img src={imgCar} alt="" /> 
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="text-carousel">
                <Carousel  controls={false} indicators={false} pause={false}>
                    <Carousel.Item interval={3000}>
                        
                <h1 className='h1-carousel'>Performance without
                compromises
                </h1>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        
                <h1 className='h1-carousel'>Performance without
                compromises
                </h1>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        
                <h1 className='h1-carousel'>Performance without
                compromises
                </h1>
                        
                    </Carousel.Item>
                </Carousel>
                <p className="p-carousel">
                    How we helped Blumarine to conquer new businesses
                </p>
                <BtnAll nome='Discover' />
                <div className="detail-agency-carousel">
                    <h3 className="h3-carousel ">
                        Blumarine
                    </h3>
                    <p className="p-carousel">
                        Front end, Design UX/UI
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyCarousel
