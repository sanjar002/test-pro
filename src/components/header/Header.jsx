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
						<Link to='/курсы'>Курсы</Link>
					</li>
					<li>
						<Link to='/преподавател'>Преподавател</Link>
					</li>
					<li>
						<Link to='/о нас'>О нас</Link>
					</li>
					<li>
						<Link to='/отзывы'>Отзывы</Link>
					</li>
					<li>
						<Link to='Контакты'>Контакты</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
