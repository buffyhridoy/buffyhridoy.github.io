import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import Publication from '../../components/Publication/Publication'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
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
