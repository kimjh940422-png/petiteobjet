import React from 'react';
import aboutMovie from '../assets/about_mv01.mp4';

const Contact = () => {
  return (
    <div className='about-wrap'>
      <div className="about-mov">
        <video src={aboutMovie} autoPlay loop muted preload='auto' playsInline>
          {/*
            * 아이폰을 위한 반응형 영상재생
            - preload='auto' : 영상을 미리 다운받음
            - playsInline : 현재의 줄 안에서 실행)
          */}
        </video>
      </div>

    </div>
  )
}

export default Contact