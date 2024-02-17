import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import image1 from '../../assets/image/tailwind.1.png'
import image2 from '../../assets/image/tailwind.2.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Carousel.scss'

function CarouselItem() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<div className='slide'>
						<img src={image1} alt='image' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide'>
						<img src={image2} alt='image' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide'>
						<img src={image1} alt='image' />
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default CarouselItem
