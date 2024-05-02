import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className='outer-container'>

      <div className="header-container">
        <div className="header-left">
          
        </div>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Language</li>

        </ul>
      </div>
      <div className="header-right">
        {/* <ul>
          <li><SearchIcon/></li>
          <li><NotificationIcon/></li>
          <li><AccountIcon/></li>
          <li><ArrowDrovdowenIcone/></li>

        </ul> */}

      </div>
    </div>
  )
}

export default Header