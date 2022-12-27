import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import iframe from 'react-iframe';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
       
       
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>NewsLetter</h2>
                    <iframe src="https://mlboss.substack.com/embed" width="100%" height="250" ></iframe>
                    {/* <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p> */}
                </div>

                {/* <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div> */}
            </div>

       </div>

    )
}

export default About
