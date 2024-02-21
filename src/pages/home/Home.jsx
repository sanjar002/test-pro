import React from 'react'

import Card from '../../components/card/Card'
import Carousel from '../../components/Carousel/Carousel'

import './Home.scss'

const Home = () => {
<<<<<<< HEAD
  return (
    <div>
      Home
    </div>
  )
=======
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
		</main>
	)
>>>>>>> eb94f9be396330a7ec2880080f1d56b1b70231aa
}

export default Home
