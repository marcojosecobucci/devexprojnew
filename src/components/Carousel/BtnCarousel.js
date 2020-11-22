import React from 'react'
import datiCarousel from './Carousel.json'
const BtnCarousel = () => {

    return (
        <div className='btn-container'>
            {datiCarousel.map((imgId, index) => {
                return <span>
                    <button value={imgId.imgid} className='btn-carousel'>
                        {console.log(imgId)}
                    </button>
                </span>
            })}
        </div>
    )
}

export default BtnCarousel
