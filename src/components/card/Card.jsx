import React from 'react'

import card from '../../data/card'

import './Card.scss'

function Card() {
	return (
		<div className='cards'>
			{card.map((item, index) => (
				<div key={index} className='card'>
					<h2 className='card-title'>{item.name}</h2>
					<p className='small-desc'>{item.text}</p>
					<div className='go-corner'>
						<div className='go-arrow'>→</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Card
