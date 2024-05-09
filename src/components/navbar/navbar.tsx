import React from 'react'
import Icon from '../icon/icon'

const Navbar:React.FC = () => {
  return (
    <div className='w-full flex justify-between align-middle py-14 text-2xl'>
        <span className='hover:text-a_hover_color ease-linear duration-200' ><a href="#home">ROHAN</a></span>
        <a className='flex items-center gap-4 border py-1 px-3 sm:px-6 text-[1rem] rounded-full' href='/RohanKumar.pdf' download={true} >Resume<Icon name={'download'} /></a>
    </div>
  )
}

export default Navbar