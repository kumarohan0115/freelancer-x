import React,{useState} from 'react'

const ContactMe:React.FC = () => {

    const[name,setName] = useState("")
    const[emailId,setEmailId] = useState("")
    const[message,setMessage] = useState("")

    return (
        <div>
            <form action="https://formspree.io/f/xnqewrpk" method="POST" className='w-full flex justify-between gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='w-[400px] flex flex-col'>
                        <label htmlFor='name' className='text-left'>Name</label>
                        <input className='px-4 py-1 bg-bg_color border-b-[1px]' type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" />
                    </div>
                    <div className='w-[400px] flex flex-col'>
                        <label htmlFor='email' className='text-left'>Email Address</label>
                        <input className='px-4 py-1 bg-bg_color border-b-[1px]' type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} name="email" id="email" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="message" className='text-left'>Message</label>
                    <textarea className='px-4 py-1 rounded-md bg-bg_color border-[1px]' cols={40} rows={5} value={message} onChange={(e)=>{setMessage(e.target.value)}} name="message" id="message" />
                </div>
                <button type='submit' className='mt-8 bg-bg_color-500 hover:bg-shadow_color hover:text-black text-white font-bold py-2 px-4 border rounded-full'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactMe