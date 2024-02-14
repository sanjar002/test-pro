import React from 'react'

import './Home.scss'

import Card from '../../components/card/Card'

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
		</main>
	)
}

export default Home
