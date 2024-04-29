import React from 'react';
import Icon from '../icon/icon';

const Footer: React.FC = () => {
  return (
    <footer className='border-t-2 border-gray-400 mt-6 py-6 relative'>
      <div className="footer-top">
        <h2 className='text-2xl my-2'>Freelancer Webflow Template - Logo</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi odio sed sapien quisque posuere vivamus neque.</p>
      </div>
      <div className="footer-links flex flex-col sm:justify-center sm:flex-row gap-4 my-4">
        <a href="/">Home</a>
        <a href="/">Blog</a>
        <a href="/">Portfolio</a>
        <a href="/">Shop</a>
        <a href="/">Licenses</a>
      </div>
      <div className='flex flex-col gap-5 items-center sm:justify-between py-4 absolute w-full'>

        <div className="flex">
            <a href="https://twitter.com"><Icon name={"Twitter"} /></a>
            <a href="https://facebook.com"><Icon name={"Facebook"} /></a>
            <a href="https://instagram.com"><Icon name={"Instagram"} /></a>
            <a href="https://youtube.com"><Icon name={"youtube"} /></a>
            <a href="https://youtube.com"><Icon name={"LinkedIn"} /></a>
        </div>
        <div className="footer-bottom">
            <p>Copyright © Freelancer X | Designed by BRIX Templates - Powered by Webflow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
