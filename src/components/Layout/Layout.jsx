import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import MapComponent from '../footer/Footer'

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<MapComponent />
		</div>
	)
}

export default Layout
