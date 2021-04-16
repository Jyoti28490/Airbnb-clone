import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to='/'>
            
            <img 
                className="header__icon"
                src="https://logodownload.org/wp-content/uploads/2016/10/Airbnb-Logo.png"
                alt="Airbnb Logo"            
            
            />
            </Link>
          
         <div className="header__center">
             <input type="text" />
             <SearchIcon />
         </div>

         <div className="header__right">
             <p>Become a Host</p>
             <LanguageIcon />
             <ExpandMoreIcon />
             <Avatar />
         </div>

           
           

        </div>

        
    )
}

export default Header
