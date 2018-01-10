import React from 'react'

const Input = (props) => {
  const classNames = `form-control ${props.className}`
  const {onSearch, ...restOfProps} = props

  return (
    <input className={classNames} {...restOfProps} />
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input
