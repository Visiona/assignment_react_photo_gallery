import React from 'react'
import PhotoBox from './elements/PhotoBox'
import Alert from './elements/Alert'


const Gallery = ({filter, currentPhotos, filteredPhotos, allPhotosData, onChangeFilter, addDefaultSrc}) => {

  const allPhotosNumber = filteredPhotos.length;
  const photoBoxes = currentPhotos.map((photoData) => (
    <div className="col-sm-3 " key={photoData['created_time']} >
      <PhotoBox photoData={photoData} addDefaultSrc={addDefaultSrc} />
    </div>
  ))

  return (
    <div className='gallery'>
      <h1 className="App-title">Welcome to Photo Gallery</h1>
      <Alert filteredPhotos={filteredPhotos} />
      <div className="row">
        {photoBoxes}
      </div>

    </div>
    )
}

export default Gallery
