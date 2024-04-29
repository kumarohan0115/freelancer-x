import React from 'react'
import Icon from '../icon/icon';

interface  Props {
    companyDetails: any;
    setReadMore : (arg: boolean) => void;
}
const ReadMore:React.FC<Props> = ({companyDetails,setReadMore}) => {
    

  return (
    <div className='lg:w-[100vw] lg:h-[100vh] backdrop-blur-sm z-10 fixed inset-0 flex items-center justify-center bg-[#1c1c1c34]'>
        <div className='sm:w-[90%] lg:w-[70%] lg:h-[80%]  bg-[#1c1c1c] shadow-md shadow-[#c3c3c3]/20'>
            <div className='heading-wrapper flex justify-between p-8 border-b-2 relative'>
                <span className='absolute right-4 top-2 cursor-pointer' onClick={()=>setReadMore(false)}><Icon name={'cross'} customClass={'whiteIcon'}/></span>
                <div className='w-[50%] flex flex-col text-left'>
                    <h2 className="text-3xl font-bold">{companyDetails?.name}</h2>
                    <h3>{companyDetails?.designation}</h3>
                    <div className='flex gap-2 mt-4'>
                    {
                        companyDetails?.techStack?.map((ele: any,ind: number)=>{
                            return <li key={ind} className='list-none bg-[#888] px-4 rounded-sm' >{ele}</li>
                        })    
                    }
                    </div>
                </div>
                <div className='h-[60px]'>
                    <img className='h-[100%]' src={companyDetails.companyLogo} alt="" />
                </div>
            </div>
            <div className='p-14 text-left text-[1.1rem]'>
                <ul className='list-disc'>
                    {
                        companyDetails?.workExperience?.map((points:string,i:number)=>{
                            return <li key={i}>{points}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ReadMore