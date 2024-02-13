import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import Layout from './components/Layout/Layout'
import Home from './pages/home/Home'
import Course from './pages/course/Course'
import Teacher from './pages/teacher/Teacher'
import About from './pages/about/About'
import Comment from './pages/comments/Comments'
import Contact from './pages/contact/Contact'
const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/course' element={<Course />} />
					<Route path='/teacher' element={<Teacher />} />
					<Route path='/about' element={<About />} />
					<Route path='/review' element={<Comment />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
