import { useState } from 'react'
import Slider from 'react-slick'

import html from '../../assets/image/html-1.svg'
import css from '../../assets/image/css 1.png'
import js from './images/img_3.jpg'
import react from '../../assets/image/react 1.png'
import sass from '../../assets/image/django 1.png'
import mui from '../../assets/image/html 2 (1).png'
import bootstrap from './images/img_7.jpg'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const images = [html, css, js, react, sass, mui, bootstrap]

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
		<>
			<div className='d-slide'>
				<Slider {...setting}>
					{images.map((img, ind) => (
						<div className={ind === imageIndex ? 'slide activeSlide' : 'slide'}>
							<img className='images__corusel' src={img} alt={img} />
						</div>
					))}
				</Slider>
			</div>
		</>
	)
}

export default Carousel
