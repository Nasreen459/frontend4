import React from 'react'
import './footer.css'
import amazon from '../../Asstes/amazon.png'

const Footer = () => {
    return(
        <div className='footer'>
        <div className='footerContent'>
        <div className='footerCont1'>
            <div className='contentFooterTitle'> Get To Know Us</div>
            <div className='contentFooterSubTitlediv'>
            <div className='contentFooterSubTitleCont'>About Us</div>
            <div className='contentFooterSubTitleCont'>Carrers</div>
            <div className='contentFooterSubTitleCont'>Press Releases</div>
            <div className='contentFooterSubTitleCont'>Amazon Science</div>

           </div>
            
        </div>


        <div className='footerCont1'>
            <div className='contentFooterTitle'> Connect With Us</div>
            <div className='contentFooterSubTitlediv'>
            <div className='contentFooterSubTitleCont'>instagram</div>
            <div className='contentFooterSubTitleCont'>Twitter</div>
            <div className='contentFooterSubTitleCont'>Facebook</div>
            

           </div>
            
        </div>



        <div className='footerCont1'>
            <div className='contentFooterTitle'> Make Money With US</div>
            <div className='contentFooterSubTitlediv'>
            <div className='contentFooterSubTitleCont'>Sell on Amazon</div>
            <div className='contentFooterSubTitleCont'>Sell under Amazon Accelerator</div>
            <div className='contentFooterSubTitleCont'>Protect And Build Your Brand</div>
            <div className='contentFooterSubTitleCont'>Amazon Globel Selling</div>
            <div className='contentFooterSubTitleCont'>Become ab Affliate</div>
            <div className='contentFooterSubTitleCont'>fullfilment by Amazon</div>

            </div>
            
        </div>




        <div className='footerCont1'>
            <div className='contentFooterTitle'> Lets Us Help yoys</div>
            <div className='contentFooterSubTitlediv'>
            <div className='contentFooterSubTitleCont'>COVID19 and Amazon</div>
            <div className='contentFooterSubTitleCont'>your account</div>
            <div className='contentFooterSubTitleCont'>Return Center</div>
        

           </div>
            
        </div>

        
        </div>

        


        



        <div className='amazonImg'>
        <img className='amazonImgFooter' src={amazon} />

        </div>
        </div>
    )
}

export default Footer