import React, {Component} from 'react'
import InputGroup from './elements/InputGroup'
import Dropdown from './elements/Dropdown'
import Gallery from './Gallery'
import Pagination from './Pagination'
import instagramResponse from '../photos.js'
import {set} from '../helpers/jsonScraper'

const optionsFilters = [
  'All',
  'Lark',
  'Normal',
  'Reyes',
  'Valencia',
  'Ludwig',
  'Inkwell'
]

class Navbar extends Component {


  constructor(props) {
    super(props)
    this.state = {
      filter: 'All',
      currentPage: '1',
      totalPages: Math.ceil(instagramResponse['data'].length/12),
      filteredPhotos: instagramResponse['data'],
      currentPhotos: instagramResponse['data'].slice(0, 12)
    }
  }



  onChangeFilter = (e) => {

    if (e.target.value !== 'All') {
      this.setState({
        filter: e.target.value,
        filteredPhotos: set(instagramResponse['data'], e.target.value)
      })
    } else {
      this.setState({
        filter: 'All',
        filteredPhotos: instagramResponse['data']
      })
    }
  }

  onChangePage = (e) => {
    const {filteredPhotos, allPhotosData} = this.state;
    console.log('page number in on change is ' + e.target.key)
    let indexOfLastPhoto = (e.target.value)*12;
    let indexOfFirstPhoto = indexOfLastPhoto - 12;
    let currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto)
    this.setState({
      currentPage: e.target.key,
      currentPhotos: filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto)
    })
  }

  render() {
    const {filter, totalPages, currentPage, currentPhotos, filteredPhotos} = this.state
    const allPhotosData = instagramResponse['data'];

    return (
    <div className='navbar-container'>
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <form className="navbar-form">
            <InputGroup name='Search' labelText='Search'>
              <input type="text" className="form-control" placeholder="Search" />
            </InputGroup>

            <ul className="nav navbar-nav navbar-right">
              <InputGroup name='filters' labelText='Filters'>
                <Dropdown name='filters' value={filter} options={optionsFilters} onChange={this.onChangeFilter} />
              </InputGroup>
            </ul>

          </form>
        </div>
      </nav>

      <div className='container'>
        <Gallery  filter={filter}
                  currentPhotos={currentPhotos}
                  filteredPhotos={filteredPhotos}
                  allPhotosData={allPhotosData}
                  onChangeFilter={this.onChangeFilter} />
      </div>
      <Pagination currentPage={currentPage}
                  totalPages={totalPages}
                  onChangePage={this.onChangePage} />
    </div>
    )
  }
}

export default Navbar
