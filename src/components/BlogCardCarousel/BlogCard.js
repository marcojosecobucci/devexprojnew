import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import datacardblog from './cardblog.json'

const BlogCard = () => {
    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    return (
        <div className='container-card'>
            {datacardblog.length === 0 ? (
                <div className="spinner-border" role='status'>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                    <Slider {...settings}>
                        {
                            datacardblog.map((item, index) => {
                                return (
                                    <div className='card-container jumbotron'>
                                        <div className="main-card">
                                            <h6 className="h3-date">
                                                {item.date}
                                            </h6>
                                            <button className='btn-card'>
                                                {item.tag}
                                            </button>
                                            <h1>
                                                {item.textcard}
                                            </h1>
                                            <small>
                                                {item.blogger}
                                            </small>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                )}

        </div>
    )
}

export default BlogCard
