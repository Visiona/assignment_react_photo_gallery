

const getUserPage = (data) => {
  return 'https://instagram.com/' + data['user']['username']
}

const getHashtag = (data) => {
  let arr = [];
  if (data['caption']) {
    let str = data['caption']['text']
    arr = str.match(/\#[^\s]+/g);
  }
  if (arr != null) {
    return arr.join(' ')
  } else {
    return null
  }
}

const getUserRealName = (data) => {
  if (data['users_in_photo'].length > 0) {
    return 'Author name: ' + data['users_in_photo'][0]['user']['full_name']
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
  return data['images']['low_resolution']['url']
}

const getInstagramLink = (data) => {
  return data['link']
}

const getCreationTime = (data) => {
  let date = data['created_time'] + '999';
  let newDate = new Date( parseInt(date) );
  // return newDate.toDateString()
  return newDate
}

const set = (dataBlocks, filterName) => {
  let newBlock = dataBlocks.filter((block) => (block['filter'] == filterName))
  return newBlock
}

const sortedPhotosDown = (dataSet) => {
  let sorted = dataSet.sort(function(photo1, photo2) {
    return photo2['created_time'] - photo1['created_time']
  });
  return sorted
}

const sortedPhotosUp = (dataSet) => {
  let sorted = dataSet.sort(function(photo1, photo2) {
    return photo1['created_time'] - photo2['created_time']
  });
  return sorted
}


module.exports = {
  getUserPage,
  getHashtag,
  getUserRealName,
  getCommentsCount,
  getLikesCount,
  getUserName,
  getFilter,
  getPhotoLink,
  getInstagramLink,
  getCreationTime,
  sortedPhotosUp,
  sortedPhotosDown,
  set
}
