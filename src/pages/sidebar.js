import React, { useState } from 'react'
// icons
import { IoIosNotificationsOutline } from 'react-icons/io'
import { VscBell } from 'react-icons/vsc'
import { LuSettings2 } from 'react-icons/lu'
import { TbLogout } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'
import { MdOutlineArrowDropDown } from 'react-icons/md'

// links
import Link from 'next/link'

import Head from 'next/head'

const sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNotif, setIsNotif] = useState(false)

  const closeBtn = () => {
    setIsOpen(!isOpen)
  }

  const openNotif = () => {
    setIsNotif(!isNotif)
  }

  return (
    <>
      <Head>
        <title>MAVENX</title>
        <link rel='icon' href='/favicon.png' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div>
        <div className='bg-color nav-flex'>
          {isOpen ? (
            <div className='side-bar'>
              <div className='nav-btn'>
                <div className='close-section'>
                  <a href='#'>
                    <img
                      className='mav-logo'
                      src='/assets/images/mav-logo.png'
                      alt=''
                    />
                  </a>
                  <div className='close-btn-main'>
                    <button className='drop-select'>
                      EN
                      <span>
                        <MdOutlineArrowDropDown />
                      </span>
                    </button>
                    <select className='close-select'>
                      <option>EN</option>
                      <option>AR</option>
                    </select>

                    <a onClick={closeBtn} className='close-btn'>
                      <IoClose />
                    </a>
                  </div>
                </div>

                <Link href='/notification' className='nav-group'>
                  <VscBell className='notif-bell icons' />
                  Notifications
                </Link>
                <Link href='setting' className='nav-group'>
                  <LuSettings2 className='icons' />
                  Settings
                </Link>
                <Link href='logout' className='nav-group'>
                  <TbLogout className='icons' />
                  Logout
                </Link>

                <hr className='separator ' />

                <a href='#' className='nav-group'>
                  About Us
                </a>
                <a href='#' className='nav-group'>
                  Privacy Policy
                </a>
                <a href='#' className='nav-group'>
                  Terms and conditions
                </a>
                <a href='#' className='nav-group'>
                  Community Guidelines
                </a>
                <a href='#' className='nav-group'>
                  DMCA Policy
                </a>
                <a href='#' className='nav-group'>
                  Cookie Policy
                </a>
              </div>
              <div onClick={closeBtn} className='overlay'></div>
            </div>
          ) : (
            <div>
              <a href='#'>
                <img
                  className='mav-logo'
                  src='/assets/images/mav-logo.png'
                  alt=''
                />
              </a>
              <button className='bg-color open-btn' onClick={closeBtn}>
                <img
                  className='open-btn-img'
                  src='/assets/images/nav.png'
                  alt=''
                />
              </button>
            </div>
          )}

          <div className='login'>
            <IoIosNotificationsOutline
              onClick={openNotif}
              className='nav-bell'
            />
            <span className='notif-num'>13</span>
            <img
              src='/assets/images/user.jpg'
              alt='user'
              className='user-icon'
            />
          </div>
        </div>
        {/* Page Content  */}
        <img src='/assets/images/office.jpg' alt='Car' className='office-img' />
        {/* notif-box */}
        {isNotif ? (
          <div>
            <div className='card'>
              <div className='card-head'>
                <div>Notification</div>

                <div>
                  <Link className='test-hover' href='/notification'>
                    View All
                  </Link>
                </div>
              </div>
              <hr className='card-hr' />
              {/* Users */}
              <div className='user-div'>
                <div className='time-box'>
                  <div className='img-box'>
                    <div>
                      <img
                        className='user-img'
                        src='/assets/images/user-rabia.png'
                        alt='user'
                      />
                    </div>
                    <div className='user-name'>rabia is... </div>
                  </div>
                  <div className='days-ago'>13 days</div>
                </div>
                <div className='time-box'>
                  <div className='img-box'>
                    <div>
                      <img
                        className='user-img'
                        src='/assets/images/user-rabia.png'
                        alt='user'
                      />
                    </div>
                    <div className='user-name'>rabia is... </div>
                  </div>
                  <div className='days-ago'>13 days</div>
                </div>
                <div className='time-box'>
                  <div className='img-box'>
                    <div>
                      <img
                        className='user-img'
                        src='/assets/images/user-rabia.png'
                        alt='user'
                      />
                    </div>
                    <div className='user-name'>rabia is... </div>
                  </div>
                  <div className='days-ago'>13 days</div>
                </div>
                <div className='time-box'>
                  <div className='img-box'>
                    <div>
                      <img
                        className='user-img'
                        src='/assets/images/user-rabia.png'
                        alt='user'
                      />
                    </div>
                    <div className='user-name'>rabia is... </div>
                  </div>
                  <div className='days-ago'>13 days</div>
                </div>
                <div className='time-box'>
                  <div className='img-box'>
                    <div>
                      <img
                        className='user-img'
                        src='/assets/images/user-rabia.png'
                        alt='user'
                      />
                    </div>
                    <div className='user-name'>rabia is... </div>
                  </div>
                  <div className='days-ago'>13 days</div>
                </div>
                <div className='time-box'>
                  <div className='img-box'>
                    <div>
                      <img
                        className='user-img'
                        src='/assets/images/user-rabia.png'
                        alt='user'
                      />
                    </div>
                    <div className='user-name'>rabia is... </div>
                  </div>
                  <div className='days-ago'>14 days</div>
                </div>
                <div className='time-box'>
                  <div className='img-box'>
                    <div>
                      <img
                        className='user-img'
                        src='/assets/images/user-rabia.png'
                        alt='user'
                      />
                    </div>
                    <div className='user-name'>rabia is... </div>
                  </div>
                  <div className='days-ago'>14 days</div>
                </div>
              </div>
            </div>
            <div className='notif-overlay' onClick={openNotif}></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default sidebar
