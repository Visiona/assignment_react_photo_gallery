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

  // addDefaultSrc = (ev) => {
  //   ev.target.src = '../../../public/320x320.png'
  // }
  // <img onError={this.addDefaultSrc} src={getPhotoLink(photoData)} alt="" />
  const {photoData} = props

  return (
    <div className="thumbnail">
      <a href={getInstagramLink(photoData)} target="_blank">
        <img onError='{this.addDefaultSrc}' src={getPhotoLink(photoData)} alt="" />
      </a>
      <div className="caption">
        <h4>
          <a href={getUserPage(photoData)} target="_blank">
            {getUserName(photoData)}
          </a>
        </h4>
        <em>{getUserRealName(photoData)}</em>
        <br/><small>
          {getCreationTime(photoData)}
        </small>
        <p class="text-success text-left">
          {getLikesCount(photoData)} Likes
          <br/>
          {getCommentsCount(photoData)} Comments
        </p>
        <p>
          Filter: <mark>{getFilter(photoData)}</mark>
        </p>
          <mark>{getHashtag(photoData)}</mark>

      </div>
    </div>
  )
}

export default PhotoBox
