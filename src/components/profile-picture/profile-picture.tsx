import React from 'react'
import userData from '../../constants/companies.json'
import Icon from '../icon/icon'
const ProfilePicture: React.FC = () => {
    return (
        <div className='flex flex-col items-center mt-[2rem] lg:mt-6'>
            <div className='p-1 lg:p-8'>
                <h1 className='text-4xl lg:text-6xl'>{userData.name}</h1> <br /> 
                <h3 className='text-2xl'>{userData.designation}</h3>
                <p className='text-1xl text-justify mt-6 lg:px-24'>{userData.about}</p>
            </div>
            <span><img src={userData.profileImageUrl} alt="profile" /></span>
            <div className='my-6 flex justify-between gap-4 '>
            {
                 userData.links.map((social,ind) => {
                    return (
                        <a href={social.url} key={ind} target="_blank" rel="noreferrer" className=''>
                            <Icon name={social.name} customClass='hover:text-social_link_hover_color' />
                        </a>
                    )
                })
            }
            </div>
        </div>
    )
} 

export default ProfilePicture