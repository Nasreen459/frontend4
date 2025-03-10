import React from "react";
import './products.css';
import laptop from '../../Asstes/laptop.jpeg';
import ear from '../../Asstes/ear.jpeg';
import bluetooth from '../../Asstes/bluetooth.jpeg';
import power from '../../Asstes/power.jpeg';
import tab from '../../Asstes/tab.jpeg';
import charger from '../../Asstes/charger.jpeg';
import computer from '../../Asstes/computer.jpeg';
import phone from '../../Asstes/phone.jpeg';




const Products = () => {
    return (
        <div className="background">
            {/* First Products Grid */}
            <div className="products-container">
                <div className="product-column blue">
                    <img className="laptop" src={laptop} alt="laptop"/>
                </div> 
                <div className="product-column green"><img className="laptop" src={ear} alt="ear"/></div>
                <div className="product-column red"><img className="laptop" src={bluetooth} alt="bluetooth"/>
                </div>
                <div className="product-column yellow"><img className="laptop" src={power} alt="power"/></div>
            </div> 

            {/* Second Products Grid */}
            <div className="products-container">
                <div className="product-column blue"><img className="laptop" src={tab} alt="tab"/></div>
                <div className="product-column green"><img className="laptop" src={charger} alt="charger"/></div>
                <div className="product-column red"><img className="laptop" src={computer} alt="computer"/></div>
                <div className="product-column yellow"><img className="laptop" src={phone} alt="phone"/></div>
            </div>
        </div>
    );
}

export default Products;
