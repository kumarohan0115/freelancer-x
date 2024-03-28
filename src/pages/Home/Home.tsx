import React from 'react'
import Navbar from '../../components/navbar/navbar'
import About from '../../components/about/about'
import ProfilePicture from '../../components/profile-picture/profile-picture'
import TechStack from '../../components/tech-stack/tech-stack'
import Experience from '../../components/experience/experience'
import Footer from '../../components/footer/footer'

const Home:React.FC = () => {
  return (
    <div className='container mx-auto px-[1rem] md:px-[2rem] lg:px-[6rem] 2xl:px-[8rem]'>
        <Navbar/>
        <ProfilePicture/>
        <TechStack/>
        <About/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default Home