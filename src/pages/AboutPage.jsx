import React from 'react'
import About from '../components/About'
import Links from '../components/Links'
import Time from '../components/Time'

const AboutPage = () => {
    return (
        <div>
            <About />
            <Links position='left' />
            <Time />
        </div>
    )
}

export default AboutPage
