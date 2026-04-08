import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import IconGrid from '@/components/IconGrid'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <IconGrid />
    <BentoGrid />
    <Footer />
    
    </>
  )
}

export default Home