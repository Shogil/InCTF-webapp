import React from 'react'
import Topbar from '../Components/Bars/Topbar'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Event from '../Components/Event/Event'

function Home() {
    return (
        <div>
            <Topbar/>
            <Banner/>
            <About/>
            <Event/>
        </div>
    )
}

export default Home
