import React from 'react'
import aboutUser from '../../constants/companies.json'
const About:React.FC = () => {
  return (
    <div className='w-full flex-col lg:flex-row flex justify-between gap-2'>
      <div  className="w-full lg:w-1/2 text-left py-4">
        <h1 className='text-4xl py-2 hover:border-b-[1px] ease-linear duration-200'>{aboutUser.title}</h1>
        <p className='text-sm md:text-lg my-3 break-all'>{aboutUser.details}</p>
      </div>
      <div className="h-[300px]">
        <img className='h-[100%] w-full object-cover' src={aboutUser.imageUrl} alt="about" />
      </div>
    </div>
  )
}

export default About