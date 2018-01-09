import React from 'react'

const Alert = ({type, filteredPhotos}) => (
  <div className={`alert alert-${type}`} role='alert'>
    {filteredPhotos.length} Results
  </div>
)

Alert.defaultProps = {
  type: 'success'
}

export default Alert
