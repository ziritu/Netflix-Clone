import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/Notifications';
import AccountIcon from '@mui/icons-material/AccountCircle';
import ArrowDrovdowenIcone from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>

      <div className="header_container">
        
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Language</li>
      
        </ul>
        
      </div>
      <div className="header_right">
        <ul>
          <li><SearchIcon/></li>
          <li><NotificationIcon/></li>
          <li><AccountIcon/></li>
          <li><ArrowDrovdowenIcone/></li>

        </ul>

      </div>
    </div>
  )
}

export default Header