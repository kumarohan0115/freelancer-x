// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm } from '@formspree/react';
const ContactForm:React.FC=()=> {
  const [state, handleSubmit] = useForm("xnqewrpk");
  if (state.succeeded) {
    return <p className='text-3xl'>Thanks for Contacting.</p>;
  }
  return (
    <form action='https://formspree.io/f/xnqewrpk' onSubmit={handleSubmit} className='w-full py-8 flex flex-col gap-6 sm:flex sm:flex-row justify-between'>
      <div className='flex flex-col gap-4'>
        <div className='w-full sm:w-[400px] flex flex-col'>
          <label htmlFor='name' className='text-left'>Name</label>
          <input className='px-4 py-1 bg-bg_color border-b-[1px] sm:w-full sm:px-0' type="text" name="name" id="name" />
        </div>
        <div className='w-full sm:w-[400px] flex flex-col'>
          <label htmlFor='email' className='text-left'>Email Address</label>
          <input className='px-4 py-1 bg-bg_color border-b-[1px] sm:w-full sm:px-0' type="email" name="email" id="email" />
        </div>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="message" className='text-left'>Message</label>
        <textarea className='px-4 py-1 rounded-md bg-bg_color border-[1px]' cols={40} rows={5} name="message" id="message" />
      </div>
      <button type="submit" className='absolute bottom-0 right-2 mt-8 bg-bg_color-500 hover:bg-shadow_color hover:text-black text-white font-bold py-2 px-4 border rounded-full' disabled={state.submitting}>Submit</button>
    </form>
  );
}
export default ContactForm;