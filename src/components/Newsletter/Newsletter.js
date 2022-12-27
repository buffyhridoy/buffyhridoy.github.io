import React, { useContext } from 'react';

import './Newsletter.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import iframe from 'react-iframe';




function Newsletter() {

    const { theme } = useContext(ThemeContext);
    return (
       
       
        <div className="newsletter" id="newsletter" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="newsletter-body">
                <div className="newsletter-description">
                    <h2 style={{color: theme.primary}}>Newsletter</h2>
                    <iframe src="https://mlboss.substack.com/embed" width="100%" height="250" ></iframe>
                    {/* <p style={{color:theme.tertiary80}}>{newsletterData.description1}<br/><br/>{newsletterData.description2}</p> */}
                </div>

                {/* <div className="newsletter-img">
                    <img 
                        src={newsletterData.image === 1 ? theme.newsletterimg1 : theme.newsletterimg2}  
                        alt="" 
                    />
                </div> */}
            </div>

       </div>

    )
}

export default Newsletter
