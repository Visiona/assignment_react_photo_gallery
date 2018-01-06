import React from 'react'
import PhotoBox from './elements/PhotoBox'
import instagramResponse from '../photos.js'
import {set} from '../helpers/jsonScraper'
import Alert from './elements/Alert'
import Pagination from './Pagination'

const Gallery = ({filter, onChangeInput}) => {
  let allPhotosData = [];

  if (filter === 'All') {
    console.log('filter is: ' + filter)
    allPhotosData = instagramResponse['data'];
  } else {
    console.log('filter is: ' + filter)
    allPhotosData = set(instagramResponse['data'], filter)
  }

  const allPhotosNumber = allPhotosData.length;
  const photoBoxes = allPhotosData.map((photoData) => (
    <div className="col-sm-3 " key={photoData['created_time']} >
      <PhotoBox photoData={photoData} />
    </div>
  ))

  return (
    <div className='gallery'>
      <h1 className="App-title">Welcome to Photo Gallery</h1>
      <Alert allPhotosNumber={allPhotosNumber} />
      <div className="row">
        {photoBoxes}
      </div>

      <Pagination currentPage={currentPage, totalPages} />
    </div>
    )
}

export default Gallery
