import React from 'react'
import Icon from '../icon/icon'

const Navbar:React.FC = () => {
  return (
    <div className='w-full flex justify-between align-middle py-14 text-2xl'>
        <span className='hover:text-a_hover_color ease-linear duration-200' ><a href="#home">Freelancer-X</a></span>
        <span className='w-[2rem]'><Icon name={'hamburger'} /></span>
    </div>
  )
}

export default Navbar