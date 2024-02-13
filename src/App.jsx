import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import Layout from './components/Layout/Layout'
const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}></Route>
			</Routes>
		</div>
	)
}

export default App
