import React from 'react'

import './Form.scss'

function Form() {
  return (
    <form action="" className='form'>
        <label>Имя 
            <input type="text"/>
        </label>
        <label>Email
            <input type="text"/>
        </label>
        <label>Телефон 
            <input type="text"/>
        </label>
    </form>
  )
}

export default Form