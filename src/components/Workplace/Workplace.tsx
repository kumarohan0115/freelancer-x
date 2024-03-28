import React from 'react'
import companyData from './companies.json'
import Icon from '../icon/icon'

const Workplace = () => {
    return (
        <div className='w-full'>
            {
                companyData.companies.map((companies) => (
                    <div className='w-full flex justify-between border-t-[1px] border-gray-500 p-8' key={companies.id}>
                        <div className='w-[70%] flex flex-col items-start'>
                            <h1 className='text-5xl'>{companies.name}</h1>
                            <p className='my-2'>{companies.workDescription}</p>
                            <div className='w-full flex justify-between my-4'>
                                <span>{companies.joinDate} - {companies.tillDate}</span>
                                <a className='flex' href="/">Read More <Icon name={"right-arrow"}/></a>
                            </div>
                        </div>
                        <ul className='flex gap-4'>
                            {
                                companies.projectsTechStack.map((pts,i) => (
                                    <li key={i}>{pts},</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default Workplace