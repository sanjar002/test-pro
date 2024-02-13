import React from 'react'

import noutImage from '../../assets/image/image-nout.png'
import backgroundImage from '../../assets/image/fon.png'

import './Home.scss'

import Card from '../../components/card/Card'

const Home = () => {
	return (
		<main className='main container'>
			<section className='section'>
				<img
					style={{ height: '100%', width: '100%' }}
					src={noutImage}
					alt='laptop image'
				/>
				<img
					style={{
						position: 'absolute',
						zIndex: '1',
						left: '0',
						width: '100%',
						height: '100%',
					}}
					src={backgroundImage}
					alt='fon image'
				/>
				<div className='laptop-title'>
					<h2>Окурмэн окуу борбору</h2>
					<div className='laptop-text'>
						<p>
							Ар бир инсан компьютерди программалаганды уйронушу керек. <br />{' '}
							Анткени ал сизге кантип туура ой жугуртконду уйрототот
						</p>
						<h3>Steve Jobs</h3>
					</div>
				</div>
			</section>
			<section className='main-box'>
				<h2>
					Направления программирования <br /> в нашей академии:
				</h2>
				<div className='main-card'>
					<Card />
				</div>
			</section>
		</main>
	)
}

export default Home
