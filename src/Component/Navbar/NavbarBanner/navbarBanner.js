import React from 'react'
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const NavbarBanner = () => {
  const optionsn = [
    { 'name': 'Fresh' },
    { 'name': 'Amazon miniT' },
    { 'name': 'Sell' },
    { 'name': 'Best Sellers' },
    { 'name': 'Today Deals' },
    { 'name': 'Mobiles' },
    { 'name': 'Electronics' },
    { 'name': 'Customers Service' },
    { 'name': 'Fashion' },
    { 'name': 'Home & Kitechen' },
  ]
return (
  <div className='NavbarBanner'>
  <div className='navbarBannerOptionsLeft'>

    <div className='optionNavbarBanner'>
    <MenuIcon sx={{fontSize: '24px'}} />
    <div className='allOptionNavbarBanner'>All</div>

    </div>

    {
      optionsn.map((item, ind) => {
        return(
          <Link to={'/Products'} className='optionNavbarBanner' key={ind}>
  
            <div className='allOptionNavbarBanner'>{item.name}</div>
            </Link>

    


        );
      })
    }

    



  </div>


  <div className='NavbarBannerRightSide'>
  <img src="https://f.media-amazon.com/images/G/31/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg" alt='amazonPrime Logo' />
  </div>
     
  </div>
)

}
    


     
  


export default NavbarBanner

















