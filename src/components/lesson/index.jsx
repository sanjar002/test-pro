import React from 'react'
import Clock from './Clock'
import Form from './Form'


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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, deleniti?
        </div>
    </section>
  )
}

export default index