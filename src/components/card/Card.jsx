import React from 'react'
import { Link } from 'react-router-dom'

import card from '../../data/card'

import './Card.scss'

function Card() {
	return (
		<div className='cards'>
			{card.map((item, index) => (
				<div key={index} className='card'>
					<h2>{item.name}</h2>
					<p>{item.text}</p>
				</div>
			))}
		</div>
	)
}

export default Card
