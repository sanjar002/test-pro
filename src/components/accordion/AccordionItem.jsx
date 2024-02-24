import React, {useRef} from 'react'
import { TfiAngleDown } from "react-icons/tfi"

function AccordionItem({answer, onClick, isOpen}) {
    const itemRef = useRef(null)
  return (
    <li className='accordion-item'>
        <button className='accordion-header' onClick={() => onClick()}>{answer.a}
            <TfiAngleDown className={`accordion-arrow ${isOpen ? "active" : ""}`}/>
        </button>
        <div className='accordion-collapse'
            style={
                isOpen ? {height: itemRef.current.scrollHeight} : {height: "0px"}
            }
        >
            <div className='accordion-body' ref={itemRef}>{answer.b}</div>
        </div>
    </li>
  )
}

export default AccordionItem