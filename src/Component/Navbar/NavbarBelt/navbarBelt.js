import React from 'react';
import './navbarBelt.css';
import amazon from '../../../Asstes/amazon.png'
import india from '../../../Asstes/india.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link } from 'react-router-dom';





const NavbarBelt = () => {
  

  return (
    <div className="navbarBelt">
      
      <div className="leftNavBelt">
        <Link to={'/'} className="leftNavBeltLogo">
          <img className="amazonLogoNavbar" src={amazon} alt="amazon" />
          <span className="navbar_inLogo">.in</span>
        </Link>

        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <LocationOnOutlinedIcon className="navbarBeltLocationImgIcon" sx={{ fontSize: '22px' }} />
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">Delivering to Pune 411032</div>
            <div className="navbarBeltLocationBottom">Update Location</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchBoxAll">
            <div className="navbarBeltSearchBoxAllText">All</div>
            <ArrowDropDownIcon sx={{ fontSize: '20px' }} />
          </div>
          <input type="text" className="navbarBeltInputSearchBox" placeholder="Search Amazon.in" />
          <div className="searchIconNavbarBelt">
            <SearchIcon sx={{ fontSize: '26px' }} className="searchIconNavbarBeltIcon" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="rightSideNavbarBelt">
        <div className="indianFlagCode">
           <img src={india} className="indiaFlag" alt="indiaFlag" /> 
          <div className="indiaCodeNavbarBelt">
            EN
            <ArrowDropDownIcon sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }} className="indiaCodeNavbarBeltDrp" />
          </div>
        </div>

        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Hello, User</div>
          <div className="indiaCodeNavbarBelt">Account & Lists</div>
        </div>

        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Returns</div>
          <div className="indiaCodeNavbarBelt">& Orders</div>
        </div>

        <div className="helloSignInNavbarBelt">
          <span className="cartItemNumberNavbarBelt">2</span>
          <div className="helloTopNavbarBelt">
            <ShoppingCartOutlinedIcon />
            <span className="cartTitle">Cart</span>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default NavbarBelt;
