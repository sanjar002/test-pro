import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/image/okurmen-logo .png'

import './Header.scss'

const Header = () => {
	const [open, setOpen] = useState(false)

	return (
		<header className='header'>
			<div className='container'>
				<div className='header_wrapper'>
					<div className='logo'>
						<img src={logo} alt='okurmen logo' />
					</div>
					<nav className={`navs ${open ? 'nav-mobile' : ''}`} onClick={() => setOpen(!open)}>
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
					<div className='mobile'>
						<div className={`mobile-btn ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
              				<span></span>
              				<span></span>
             				<span></span>
            			</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
