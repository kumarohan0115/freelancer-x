import React from 'react'
import Icon from '../icon/icon';

interface  Props {
    companyDetails: any;
    setReadMore : (arg: boolean) => void;
}
const ReadMore:React.FC<Props> = ({companyDetails,setReadMore}) => {
    

  return (
    <div className='lg:w-[100vw] lg:h-[100vh] backdrop-blur-sm z-10 fixed inset-0 flex items-center justify-center bg-alpa_bg_color'>
        <div className='sm:w-[100%] lg:w-[70%] lg:h-[80%]  bg-bg_color shadow-md shadow-shadow_color/20'>
            <div className='heading-wrapper flex justify-between p-8 border-b-2 relative sm:flex-row flex-col-reverse'>
                <span className='absolute right-4 sm:top-2 top-8 cursor-pointer' onClick={()=>setReadMore(false)}><Icon name={'cross'} customClass={'whiteIcon'}/></span>
                <div className='sm:w-[50%] w-full flex flex-col text-left'>
                    <h2 className="text-3xl font-bold">{companyDetails?.name}</h2>
                    <h3>{companyDetails?.designation}</h3>
                    <div className='flex gap-2 flex-wrap mt-4'>
                    {
                        companyDetails?.techStack?.map((ele: any,ind: number)=>{
                            return <li key={ind} className='list-none bg-[#888] px-4 rounded-sm whitespace-nowrap' >{ele}</li>
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