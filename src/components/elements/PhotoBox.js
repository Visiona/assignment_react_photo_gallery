import React from 'react'
import instagramResponse from '../../photos.js'

const photoData = instagramResponse['data'][0];

const getUserPage = (data) => {
  return 'https://instagram.com/' + data['user']['username']
}

const getHashtag = (data) => {
  return data['caption']['text']
}

const getUserRealName = (data) => {
  if (data['users_in_photo']['users']['full_name']) {
    return data['users_in_photo']['users']['full_name']
  }
}


const getCommentsCount = (data) => {
  return data['comments']['count']
}

const getLikesCount = (data) => {
  return data['likes']['count']
}

const getUserName = (data) => {
  return data['user']['username']
}

const getFilter = (data) => {
  return data['filter']
}

const getPhotoLink = (data) => {
  return data['images']['low-resolution']['url']
}

const getInstagramLink = (data) => {
  return data['link']
}

const getCreationTime = (data) => {
  let date = data['created_time'] + '999';
  let newDate = new Date( parseInt(date) );
  return newDate.toDateString()
}

const PhotoBox = ({link, children}) => {

  return (
    <div className="thumbnail">
      <img src="..." alt="..." />
      <div className="caption">
        <h3>Thumbnail label</h3>
        <p>
          {getCreationTime(photoData)}
          {getUserName(photoData)}
          {getCommentsCount(photoData)}
        </p>
        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  )
}

export default PhotoBox
