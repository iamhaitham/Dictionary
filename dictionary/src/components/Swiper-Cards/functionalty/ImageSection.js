import React from 'react'
import { ArrowForward } from '@mui/icons-material';
import images from './dataImages';
import 'react-slideshow-image/dist/styles.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../index.css"


const ImageSection = () => {
    return (
        <div className="FirstCon">
            <AliceCarousel mouseTracking items={images.map((item) =>
                <div className='divcot'>
                    <img src={item.url} className="imgs" />
                    <span className='button_image'>
                        <p>{item.caption}</p>
                        <ArrowForward className="ArrowForward" />
                    </span>
                </div>


            )} autoWidth={true} disableButtonsControls />

        </div>
    )
}


export default ImageSection