import React from 'react'

import './Form.scss'

function Form() {
  return (
    <form action="https://formsubmit.co/zakypzumagulov10@gmail.com" method='POST' className='form'>
        <label>Атыныз
            <input type="text" name='name' placeholder='Сиздин атыныз'/>
        </label>
        <label>Email
            <input type="email" name='email' placeholder='Сиздин email'/>
        </label>
        <label>Телефон
            <input type="text" name='phone' placeholder='Сиздин телофон номериниз'/>
        </label>
        <button type='submit'>Басуу</button>
        dfghjkl
    </form>
  )
}

export default Form