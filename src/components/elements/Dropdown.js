import React from 'react'



const Dropdown = (props) => {
  const {options, ...restOfProps} = props
  const optionElements = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))


  return (
    <select className='form-contorl' {...restOfProps}>
      {optionElements}
    </select>
  )
}

export default Dropdown
