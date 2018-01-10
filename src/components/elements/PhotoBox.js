import React from 'react'
const {
  getUserPage,
  getHashtag,
  getUserRealName,
  getCommentsCount,
  getLikesCount,
  getUserName,
  getFilter,
  getPhotoLink,
  getInstagramLink,
  getCreationTime } = require('../../helpers/jsonScraper');


const PhotoBox = (props) => {

  const {photoData, addDefaultSrc} = props


  return (
    <div className="thumbnail">
      <a href={getInstagramLink(photoData)} target="_blank">
        <img onError={addDefaultSrc} src={getPhotoLink(photoData)} alt="" />
      </a>
      <div className="caption">
        <h4>
          <a href={getUserPage(photoData)} target="_blank">
            {getUserName(photoData)}
          </a>
        </h4>
        <em>Author name: {getUserRealName(photoData)}</em>
        <br/><small>
          {getCreationTime(photoData).toDateString() }<br/>
          {getCreationTime(photoData).toLocaleTimeString()}
        </small>
        <p className="text-success text-left">
          {getLikesCount(photoData)} Likes
          <br/>
          {getCommentsCount(photoData)} Comments
        </p>
        <p>
          Filter: <mark>{getFilter(photoData)}</mark>
        </p>
          <mark><small>{getHashtag(photoData)}</small></mark>

      </div>
    </div>
  )
}

export default PhotoBox
