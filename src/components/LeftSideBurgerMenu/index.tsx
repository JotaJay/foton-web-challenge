/* eslint-disable react/prop-types */
import React from 'react'

 const LeftSideBurgerMenu: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <p>bugerMenu</p>
      {children}
    </div>
  )
}

export default LeftSideBurgerMenu