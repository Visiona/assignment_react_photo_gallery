import React from 'react'

const SortButton = (props) => {
  const {order, ...restOfProps} = props
  const sortingTask = (order) => {
    if (order === 'growing') {
      return <span className="glyphicon glyphicon-sort-by-order-alt" aria-hidden="true"></span>
    } else {
      return <span className="glyphicon glyphicon-sort-by-order" aria-hidden="true"></span>
    }
  }


  return (
    <button type="button" className="btn btn-default btn-sm">
      {sortingTask(order)}
    </button>
  )
}

export default SortButton
