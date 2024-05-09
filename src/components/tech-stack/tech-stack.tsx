import React from 'react'
import techStack from '../../constants/companies.json'

const TechStack: React.FC = () => {

    return (
        <div className='sm:my-28'>
            <h1 className='text-4xl sm:text-5xl p-6'>Tech Stack</h1>
            <div className='flex gap-6 flex-wrap w-full'>
                {

                    techStack.techLanguage.map((item,index)=>{
                        return (
                            <div key={index} className='w-full md:w-[calc(50%-2rem)] lg:w-[30%] p-4 flex justify-center border-t-[1px] border-gray-500'>
                                <h2>{item}</h2>
                            </div> 
                        )
                    })

                }
            </div>
        </div>
    )
}

export default TechStack