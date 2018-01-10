import React from 'react'

const SortButton = (props) => {
  const {order, onSorting} = props
  const sortingTask = (order) => {
    if (order === 'increase') {
      return <span className="glyphicon glyphicon-sort-by-order-alt" aria-hidden="true" value='increase'></span>
    } else {
      return <span className="glyphicon glyphicon-sort-by-order" aria-hidden="true" value='decrease'></span>
    }
  }


  return (
    <button type="button" className="btn btn-default btn-sm" onClick={(e) => onSorting(e)}>
      {sortingTask(order)}
    </button>
  )
}

export default SortButton
