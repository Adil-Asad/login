import React, { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openBtn = () => {
    setIsOpen(true)
  }

  const closeBtn = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen ? (
        <div className='visibility' id='side-bar'>
          <div className='nav-btn'>
            <button onClick={closeBtn} className='close-btn'>
              Close &times;
            </button>
            <a href='#' className='nav-group'>
              Home
            </a>
            <a href='#' className='nav-group'>
              About Us
            </a>
            <a href='#' className='nav-group'>
              Contact Us
            </a>
          </div>
        </div>
      ) : (
        <div className='bg-color'>
          <button className='bg-color open-btn' onClick={openBtn}>
            ☰
          </button>
        </div>
      )}

      {/* Page Content */}
      <img src='/assets/images/office.jpg' alt='Car' className='office-img' />
    </>
  )
}

export default Sidebar
