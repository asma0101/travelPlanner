import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';  

const ImgSwiper = () => {
    useEffect(() => {
      const mySwiper = new Swiper('.swiper-container', {
       modules: [Navigation, Pagination],
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1000, // Set the delay (in milliseconds) between slides
        disableOnInteraction: false, // Continue autoplay even after user interaction
      },
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);
    return (
      <>
		<div className="container mx-auto p-8 text-center">
			<div className="swiper-container">
			<div className="swiper-wrapper">
				<div className="swiper-slide h-20" style={{ backgroundImage: 'url(/slide1.jpg)' }}>
				<div className="text-white">
					<h2 className="text-2xl font-bold mb-4">Slide 1</h2>
					<p>Text for slide 1</p>
				</div>
				</div>
				<div className="swiper-slide" style={{ backgroundImage: 'url(/slide2.jpg)' }}>
				<div className="text-white">
					<h2 className="text-2xl font-bold mb-4">Slide 2</h2>
					<p>Text for slide 2</p>
				</div>
				</div>
				<div className="swiper-slide" style={{ backgroundImage: 'url(/slide3.jpg)' }}>
				<div className="text-white">
					<h2 className="text-2xl font-bold mb-4">Slide 3</h2>
					<p>Text for slide 3</p>
				</div>
				</div>
			</div>
			<div className="swiper-button-next"></div>
			<div className="swiper-button-prev"></div>
			</div>
      	</div>
        </>
    );
}

export default ImgSwiper;