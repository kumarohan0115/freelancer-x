import React from 'react';
import ContactForm from '../contact/contactus'
import companies from '../../constants/companies.json'
const Footer: React.FC = () => {
  return (
    <footer className='border-t-2 border-gray-400 mt-6 py-6 relative'>
      <div className="footer-top my-[2rem]">
        <h2 className='text-4xl sm:text-5xl my-2'>Contact</h2>
        <p>I would love to be in touch with you!</p>
      </div>

      <div className="footer-links flex flex-col items-start gap-4 my-4">
        {
          companies.contact.map((ele,i)=>{
              return <div key={i}>
                <label className='text-1xl sm:text-2xl'>{ele.label}: </label>
                <span className='text-1xl sm:text-2xl'>{ele.value}</span>
              </div>
          })
        }
      </div>
      <ContactForm/>
      <div className='flex flex-col gap-5 items-center sm:justify-between py-4 absolute w-full mt-6'>

        {/* <div className="flex">
          <a href="https://twitter.com"><Icon name={"Twitter"} /></a>
          <a href="https://facebook.com"><Icon name={"Facebook"} /></a>
          <a href="https://instagram.com"><Icon name={"Instagram"} /></a>
          <a href="https://youtube.com"><Icon name={"youtube"} /></a>
          <a href="https://youtube.com"><Icon name={"LinkedIn"} /></a>
        </div> */}
        <div className="footer-bottom">
          <p>Copyright © webnart | Designed by VRS Templates - Powered by Webnart</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
