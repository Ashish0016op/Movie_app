import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import About from '../../components/AboutUs/About'
import OurBest from '../../components/OurBest/OurBest'
import Gallery from '../../components/Gallery/Gallery'
import ClientTestimonals from '../../components/ClientTestimonals/ClientTestimonals'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <OurBest/>
      <Gallery/>
      <ClientTestimonals/>
    </div>
  )
}

export default Home
