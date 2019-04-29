import React from 'react';
import './ImgDisplay.css';

const ImgDisplay = ({imgurl,box}) => {
    return (
        <div className='makeCenter'>
        <div className='outer'>
                <img src={imgurl} alt='face-detection' className='shadow-3 facePic' id='face-picture'/>
                <div className='bounding-box' 
                        style = {{top:box.top,left:box.left,bottom:box.bottom,right:box.right}}
                        >
                        {console.log(box)}
                </div>
        </div>
        </div>
    );
}

export default ImgDisplay;