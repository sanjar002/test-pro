import React from 'react'

import './Form.scss'

function Form() {
  return (
    <form action="https://formsubmit.co/zakypzumagulov10@gmail.com" method='POST' className='form'>
        <div className='form-content'>
          <label>Атыныз</label>
          <input type="text" name='name' placeholder='Сиздин атыныз'/>
        </div>
        <div className='form-content'>
          <label>Телефон</label>
          <input type="text" name='phone' placeholder='Сиздин телофон номериниз'/>
        </div>
        <button type='submit'>Басуу</button>
    </form>
  )
}

export default Form