import React from 'react'
import PhotoBox from './elements/PhotoBox'
import instagramResponse from '../photos.js'

const allPhotosData = instagramResponse['data'];

const Gallery = () => {
  console.log('here is our first photo data: ' + instagramResponse['data'][0])
  const photoBoxes = allPhotosData.map((photoData) => (
    <div className="col-sm-3 " key={photoData['created_time']} >
      <PhotoBox photoData={photoData} />
    </div>
  ))

  return (
      <div className="row">
        {photoBoxes}
      </div>
    )
}

export default Gallery
