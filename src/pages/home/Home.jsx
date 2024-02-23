import React from 'react'

import Card from '../../components/card/Card'
import Carousel from '../../components/Carousel/Carousel'

import './Home.scss'
import Animation from '../../components/animation/Animation'

const Home = () => {
	return (
		<main className='main'>
			<div className='main-content'>
				<div className='container'>
					<section className='section'>
						<div className='laptop-title'>
							<h2>
								Азыркы замандын айтишниктери <br /> келечектин аскерлери
							</h2>
							<div className='laptop-text'>
								<p>Тесттен өтүп, биринчи сабакты акысыз көр</p>
								<div className='laptop-link'>
									<a
										href='https://docs.google.com/forms/d/e/1FAIpQLSdwZjt1C-aChnqr0CC2W1hKuxyFfqpTgxNa0fhrb5ceIAa3ig/viewform'
										target='blank'
									>
										Тесттен өтүү
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<section>
				<div className='container'>
					<div className='wrapper'>
						<h2>Биздин баардык курстар:</h2>
						<Card />
					</div>
				</div>
			</section>
			<section className='main-carousel'>
				<div className='container'>
					<div className='carousel'>
						<Carousel />
					</div>
				</div>
			</section>
			<section className='main-animation'>
				<div className='container'>
					<div className='animation-text'>Биздин өнөктөштөр</div>
					<div className='animation-content'>
						<Animation />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
