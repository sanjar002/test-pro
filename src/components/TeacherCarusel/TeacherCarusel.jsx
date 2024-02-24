import React from 'react';
import BgMentorTeacher from "../../assets/image/1670003140_15-pibig-info-p-oboi-na-rabochii-stol-programmista-oboi-16 1.png"
import "./TeacherCarusel.scss"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
import Slider from 'react-slick'
import alisher from "../../assets/image/alisher.jpg"
import suymyk from "../../assets/image/syimyk-mentor.png"
import sanjar from "../../assets/image/mentors 1.png"

const images = [
    {
        image: alisher,
        name: "Толгоев Алишер",
    },
    {
        image: suymyk,
        name: "Токтобек уулу Сыймык",
    },
 
    {
        image: sanjar,
        name: "Кайраткелдиев Санжар",
    }
]

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const TeacherCarusel = () => {
	const [imageIndex, setImageIndex] = useState(2)

	const NextArrow = ({ onClick }) => {
		return (
			<div style={{display: "none"}} className='arrow next' onClick={onClick}>
				<FaArrowRight />
			</div>
		)
	}

	const PrevArrow = ({ onClick }) => {
		return (
			<div style={{display: "none"}} className='arrow prev' onClick={onClick}>
				<FaArrowLeft />
			</div>
		)
	}

    const setting = {
        infinite: true,
        lazyLoad: true,
        speed: 400,
        slidesToShow: 2,
        centerMode: 3,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        autoplay: true,
        autoplaySpeed: 2000,  
      };
  return (
    <section
    style={{marginBottom: "-100px"}}
      className="text-gray-600 bgi body-font"
    >
      <div className="container bgc mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <div className='d-slide'>
				<Slider {...setting}>
					{images.map((el, index) => (
						<div className={index === imageIndex ? 'slide activeSlide' : 'slide'}>
							<img style={{borderRadius:"10px"}} className='images__corusel carusel__card__mentor' src={el.image} alt={el.image} />
                            <p className='card__text' style={{color: "white"}}>{el.name}</p>
						</div>
					))}
				</Slider>
			</div>
        </div>
      </div>
    </section>
  );
};

export default TeacherCarusel;
