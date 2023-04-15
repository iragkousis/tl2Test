import React from 'react';
import imageUrl from './LogoApp.png';

function ImageComponent() {
     // replace with your image URL
  
  return (
    <div className='Image'>
      <img src={imageUrl} style={{ width: '20vh' }} alt="AppLogo" />
    </div>
  );
}

export default ImageComponent;
