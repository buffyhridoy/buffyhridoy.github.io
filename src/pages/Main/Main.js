import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import Publication from '../../components/Publication/Publication'
import Newsletter from '../../components/Newsletter/Newsletter'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <Newsletter/>
            <Blog />
            <Skills />
            <Achievement />
            <Experience />
            <Education />
            {/* <Projects /> */}
            {/* <Testimonials /> */}
           <Publication/>
            {/* <Services /> */}
           
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
