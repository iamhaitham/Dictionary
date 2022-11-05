import React from 'react'
import { ArrowForward } from '@mui/icons-material';
import clickOnImage from './ClickOnImage';
import { Slide } from 'react-slideshow-image';
import images from './dataImages';
import 'react-slideshow-image/dist/styles.css'
import '../index.css';
const ImageSection = () => {
    const allImage = images
    return (
        <div style={{ width: "100%", height: "100%" }}>

            <Slide arrows={true} autoplay={false} pauseOnHover={true}>
                {allImage.map((item, index) => (
                    <div>
                        <div className="each-slide" onClick={() => { clickOnImage(item.url, allImage) }} key={index}>
                            <div className='ImageContainer'>
                                <img src={item.url} className="image-slider" />
                                <p className='textInsideImage'>{item.text}</p>
                                <div className='button_image'>
                                    <p className='caption'>{item.caption}</p>
                                    <span className='ArrowForward'><ArrowForward /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ImageSection