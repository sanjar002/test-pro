import React from 'react'
import './Header.scss'

import logo from '../../assets/image/okurmen-logo .png'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='container'>
			<div className='logo'>
				<img src={logo} alt='okurmen logo' />
			</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li>
						<Link to='/course'>Курсы</Link>
					</li>
					<li>
						<Link to='/teacher'>Преподаватель</Link>
					</li>
					<li>
						<Link to='/about'>О нас</Link>
					</li>
					<li>
						<Link to='/review'>Отзывы</Link>
					</li>
					<li>
						<Link to='/contact'>Контакты</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
