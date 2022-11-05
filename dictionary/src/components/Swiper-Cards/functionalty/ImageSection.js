import React from 'react'
import { ArrowForward } from '@mui/icons-material';
import images from './dataImages';
import 'react-slideshow-image/dist/styles.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../index.css"


const ImageSection = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div style={{ justifyContent: "center", marginLeft: "50%" }}>
            </div>
            <div>
                <AliceCarousel mouseTracking items={images.map((item) => <div>
                    <img src={item.url} className="imgs" />
                    <div className='button_image'>
                        <p className='caption'>{item.caption}</p>
                        <span className='ArrowForward'><ArrowForward /></span>
                    </div>
                </div>)} autoWidth={true} disableButtonsControls />
            </div>

        </div>
    )
}


export default ImageSection