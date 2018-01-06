import React from 'react'

const Alert = ({type, allPhotosNumber}) => (
  <div className={`alert alert-${type}`} role='alert'>
    {allPhotosNumber} Results
  </div>
)

Alert.defaultProps = {
  type: 'success'
}

export default Alert
