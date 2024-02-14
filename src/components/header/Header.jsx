import React from 'react'
import './Header.scss'

import logo from '../../assets/image/okurmen-logo .png'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header_wrapper'>
					<div className='logo'>
						<img src={logo} alt='okurmen logo' />
					</div>
					<nav>
						<ul>
							<li>
								<Link to='/'>Башкы бет</Link>
							</li>
							<li>
								<Link to='/course'>Курстар</Link>
							</li>
							<li>
								<Link to='/teacher'>Мугалимдер</Link>
							</li>
							<li>
								<Link to='/about'>Окурмэн</Link>
							</li>
							<li>
								<Link to='/review'>Отзыв</Link>
							</li>
							<li>
								<Link to='/contact'>Контакт</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
