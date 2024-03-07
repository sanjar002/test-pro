import React from 'react'
import Dayleft from './Clock/DayLeft'
import Form from './form/Form'

import './index.scss'


function index() {
  return (
    <section className='content-form'>
        <div className='content-time'>
            <div className='content-time-text'>Шашылыңыз! Акысыз сабакка катталууга жетишип калыңыз</div>
            <div className='content-time-clock'>
                <Dayleft />
            </div>
        </div>
        <div className='content-form'>
            <Form />
        </div>
    </section>
  )
}

export default index