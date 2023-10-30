import Content from '@/components/Content'
import HomePage from '@/components/HomePage'
import React from 'react'
import './globals.css'
import Wander from '@/components/Wander'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
      <HomePage/>
      <Content/>
      <Wander/>
      <Footer/>
    </div>
  )
}

export default page
