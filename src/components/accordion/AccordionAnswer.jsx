import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

function AccordionAnswer({answer}) {
    const [openId, setId] = useState(null)
  return ( 
    <ul className='accordion'>
        {
            answer.map((item, id) => {
                return <AccordionItem onClick={() => (id === openId ? setId(null) : setId(id))} answer={item} isOpen={id === openId} key={id}/>
            })
        }
    </ul>
  )
}

export default AccordionAnswer