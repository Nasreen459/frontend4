import React from 'react'
import './homeScreen.css'
import HomeDetails from './HomeDetails/homeDetails';
import HomeBanner from './HomeBanner/homeBanner';


const HomeScreen = () => {
    return (
        <div className='homwScreen'>
            
            <HomeBanner />
            <HomeDetails/>
            
        </div>
    )
}

export default HomeScreen;