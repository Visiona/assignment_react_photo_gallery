import React, {Component} from 'react'
import InputGroup from './elements/InputGroup'
import Dropdown from './elements/Dropdown'
import Gallery from './Gallery'
import Pagination from './Pagination'
import instagramResponse from '../photos.js'
import {set, sortedPhotosUp, sortedPhotosDown} from '../helpers/jsonScraper'
import SortButton from './elements/SortButton'
import placeholderImg from '../320x320.png';

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
      currentPhotos: instagramResponse['data'].slice(0, 12),
      order: 'none'
    }
  }



  onChangeFilter = (e) => {
    const {filteredPhotos, totalPages} = this.state;
    if (e.target.value !== 'All') {
      let afterFiltering = set(instagramResponse['data'], e.target.value);
      this.setState({
        filter: e.target.value,
        filteredPhotos: afterFiltering,
        currentPage: '1',
        currentPhotos: afterFiltering.slice(0, 12),
        totalPages: Math.ceil( afterFiltering.length/12 )
      })
    } else {
      this.setState({
        filter: 'All',
        filteredPhotos: instagramResponse['data'],
        currentPage: '1',
        currentPhotos: instagramResponse['data'].slice(0, 12),
        totalPages: Math.ceil(filteredPhotos.length/12)
      })
    }
  }

  onSorting = (e) => {
    const {filteredPhotos, order} = this.state;
    console.log('I am in onSorting')
    console.log( filteredPhotos )
    console.log( sortedPhotosUp(filteredPhotos) )

    if (order === 'decrease') {
      this.setState({
        filteredPhotos: sortedPhotosDown(filteredPhotos),
        currentPhotos: sortedPhotosDown(filteredPhotos).slice(0, 12),
        order: 'increase'
      })
    } else {
      this.setState({
        filteredPhotos: sortedPhotosUp(filteredPhotos),
        currentPhotos: sortedPhotosUp(filteredPhotos).slice(0, 12),
        order: 'decrease'
      })
    }
  }

  addDefaultSrc = (ev) => {
    ev.target.src = placeholderImg
  }

  onChangePage = (e, i) => {
    const {filteredPhotos, allPhotosData, totalPages} = this.state;
    console.log('page number in on change is ' + i)
    let indexOfLastPhoto = i*12;
    console.log('idnex of last page is: ' + i)
    let indexOfFirstPhoto = indexOfLastPhoto - 12;
    let currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto)
    this.setState({
      currentPage: i,
      currentPhotos: filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto),
      totalPages: Math.ceil(filteredPhotos.length/12)
    })
  }

  render() {
    const {filter, totalPages, currentPage, currentPhotos, filteredPhotos, order} = this.state
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


              <SortButton onSorting={this.onSorting} order={order} />


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
                  onChangeFilter={this.onChangeFilter}
                  addDefaultSrc={this.addDefaultSrc} />
      </div>
      <Pagination currentPage={currentPage}
                  totalPages={totalPages}
                  onChangePage={this.onChangePage} />
    </div>
    )
  }
}

export default Navbar
