import React from 'react'
import AccordionAnswer from './AccordionAnswer'

import './index.css'

function AccordionRequest() {

  const request = [
    {
        a: 'IT-ни окуу үчүн англис тили маанилүүбү?',
        b: 'Жок.'
    },
    {
        a: 'IT-ни окуу үчүн англис тили маанилүүбү?',
        b: 'Ооба, болот. Англис тилин бизден бекер үйрөнөсүз. '
    },
    {
        a: 'Жаш чектөө барбы?',
        b: '14-жаштан 50 жашка чейин окууга болот'
    },
    {
        a: 'Окуу борбор качан негизделген?',
        b: '2022-жылы 25-майында негизделген.'
    },
    {
        a: 'Окууну бүткөндөн кийин жумуш таап бересиздерби?',
        b: 'Эгерде сиз окууну жакшы өздөштүрүп, биз койгон талаптарга жооп берсениз, анда жумуш жагынан беребиз!'
    },
    {
      a: 'Сертификат берилеби?',
      b: 'Албетте, экзаменден кийин'
  }
]    

  return (
    <div className='accordion-prop'>
      <AccordionAnswer answer={request}/>
    </div>
  )
}

export default AccordionRequest