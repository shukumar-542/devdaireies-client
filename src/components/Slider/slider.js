/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const slider = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <Image className='w-full' src="https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg"  alt="Picture of the author" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <Image className='w-full' src="https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg"  alt="Picture of the author" />
          {/* <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <Image className='w-full' src="https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg"  alt="Picture of the author" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <Image className='w-full' src="https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg"  alt="Picture of the author" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default slider;