import '../index.css';
import React from 'react'
import { ArrowForward } from '@mui/icons-material';
import clickOnImage from './ClickOnImage';
import images from './dataImages';
import 'react-slideshow-image/dist/styles.css'
const ImageSection = () => {
    const allImage = images
    return (
        <div>
            {allImage.map((item, index) => (
                <div className="each-slide" onClick={() => { clickOnImage(item.url,allImage) }} key={index}>
                    <div className='ImageContainer'>
                        <img src={item.url} className="image-slider" />
                        <p className='textInsideImage'>{item.text}</p>
                        <div className='button_image'>
                            <p className='caption'>{item.caption}</p>
                            <span className='ArrowForward'><ArrowForward /></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImageSection