import React, { useState } from 'react'
import companyData from './companies.json'
import Icon from '../icon/icon'
import ReadMore from '../read-more/readmore'

const Workplace: React.FC = () => {


    const [readMore, setReadMore] = useState(false)
    const [companyDetails, setCompanyDetails] = useState<any>()

    const readmore=(i: number)=>{
        setReadMore(true)
        setCompanyDetails(companyData?.companies[i])
    }

    return (
        <div className={`w-full`}>
            <div className='w-full'>
                {
                    companyData.companies.map((companies,i) => (
                        <div className='w-full sm:text-.9rem sm:direction-column lg:flex lg:justify-between border-t-[1px] border-gray-500 p-4 sm:p-8' key={companies.id}>
                            <div className='w-full sm:w-[70%] flex flex-col items-start'>
                                <h1 className='text-[1.5rem] sm:text-[2rem] lg:text-5xl'>{companies.name}</h1>
                                <p className='my-2'>{companies.workDescription}</p>
                                <span>{companies.joinDate} - {companies.tillDate}</span>
                            </div>
                            <div>
                                <ul className='flex gap-4'>
                                    {
                                        companies.projectsTechStack.map((pts, i) => (
                                            <li key={i} >{pts}</li>
                                        ))
                                    }
                                </ul>
                                <div className='w-full flex justify-between my-4'>
                                    <span className='flex cursor-pointer' onClick={()=>readmore(i)} >Read More <Icon name={"right-arrow"} /></span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {readMore && <ReadMore companyDetails={companyDetails} setReadMore={setReadMore} />}
        </div>
    )
}

export default Workplace