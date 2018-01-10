import React, {Component} from 'react'
import InputGroup from './elements/InputGroup'
import Dropdown from './elements/Dropdown'
import Gallery from './Gallery'
import Pagination from './Pagination'
import instagramResponse from '../photos.js'
import {set, sortedPhotosUp, sortedPhotosDown, searchPhrase} from '../helpers/jsonScraper'
import SortButton from './elements/SortButton'
import placeholderImg from '../320x320.png';
import Input from './elements/Input'

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
      order: 'none',
      inputValue: ''
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
      let noFilter = instagramResponse['data'];
      this.setState({
        filter: 'All',
        filteredPhotos: noFilter ,
        currentPage: '1',
        currentPhotos: noFilter.slice(0, 12),
        totalPages: Math.ceil(noFilter.length/12)
      })
    }
  }

  onSorting = (e) => {
    const {filteredPhotos, order} = this.state;
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
    let indexOfLastPhoto = i*12;
    let indexOfFirstPhoto = indexOfLastPhoto - 12;
    let currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto)
    this.setState({
      currentPage: i,
      currentPhotos: filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto),
      totalPages: Math.ceil(filteredPhotos.length/12)
    })
  }

  onSearch = (e) => {
    let searchResults = searchPhrase(instagramResponse['data'], e.target.value)
    console.log('here is result of my search: ')
    console.log(searchResults)
    console.log('and teh value of target is: ' +  e.target.value)
    if ( searchResults ) {
      this.setState({
        filteredPhotos: searchResults,
        currentPage: '1',
        currentPhotos: searchResults.slice(0, 12),
        totalPages: Math.ceil( searchResults.length/12 ),
        inputValue: e.target.value
      })
    }
  }

  render() {
    const {filter, totalPages, currentPage, currentPhotos, filteredPhotos, order, inputValue} = this.state
    const allPhotosData = instagramResponse['data'];

    return (
    <div className='navbar-container'>
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <form className="navbar-form">
            <InputGroup name='Search' labelText='Search'>
              <Input name='inputValue' onChange={this.onSearch} value={inputValue} />
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
