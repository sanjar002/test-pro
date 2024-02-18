import { useState } from 'react'
import Slider from 'react-slick'

import image1 from './images/img_1.jpg'
import image2 from './images/img_2.jpg'
import image3 from './images/img_3.jpg'
import image4 from './images/img_4.jpg'
import image5 from './images/img_5.jpg'
import image6 from './images/img_6.jpg'
import image7 from './images/img_7.jpg'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const images = [image1, image2, image3, image4, image5, image6, image7]

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Carousel.scss'

function Carousel() {
	const [imageIndex, setImageIndex] = useState(0)

	const NextArrow = ({ onClick }) => {
		return (
			<div className='arrow next' onClick={onClick}>
				<FaArrowRight />
			</div>
		)
	}

	const PrevArrow = ({ onClick }) => {
		return (
			<div className='arrow prev' onClick={onClick}>
				<FaArrowLeft />
			</div>
		)
	}

	const setting = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: 3,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	}

	return (
		<div className='d-slide'>
			<Slider {...setting}>
				{images.map((img, ind) => (
					<div className={ind === imageIndex ? 'slide activeSlide' : 'slide'}>
						<img src={img} alt={img} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Carousel
