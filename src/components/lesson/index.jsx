import React from 'react'
import Clock from './Clock/Clock'
import Form from './form/Form'

import './index.scss'


function index() {
  return (
    <section className='content-form'>
        <div className='content-time'>
            <div className='content-time-text'>Шашылыңыз! Акысыз сабакка катталууга жетишип калыңыз</div>
            <div className='content-time-clock'>
                <Clock />
            </div>
        </div>
        <div className='content-form'>
            <Form />
        </div>
    </section>
  )
}

export default index