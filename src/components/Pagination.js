import React from 'react'

const Pagination = ({currentPage, totalPages, onChangePage}) => {

  let listPages=[];

  for(let i=1; i<=totalPages; i++) {
    if (i === parseInt(currentPage)) {
      listPages.push(<li className='active' key={i}><a onClick={(e) => onChangePage(e, i)} >{i}</a></li>)
    } else {
      listPages.push(<li key={i}><a onClick={(e) => onChangePage(e, i)} >{i}</a></li>)
    }
  }

  return (
  <nav aria-label="Page navigation">
    <ul className="pagination">

      {listPages}

    </ul>
  </nav>
  )
}


export default Pagination
