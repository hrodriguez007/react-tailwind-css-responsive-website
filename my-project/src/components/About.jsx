import React from 'react';
import { Button } from 'react-scroll';
import {Link} from 'react-scroll';
import Heading from '../layout/Heading';

const About = () => {
  return (
    <div className=' md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-12'>
        <div className=' w-full md:w-2/4'>
        <img src='src\assets\8271020_5514.jpg' alt='Image by pch.vector on Freepik' />
        </div>
        <div className=' w-full md:w-2/4 text-center space-y-2'>
        <Heading title1="About" title2="Us?"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium lectus quam id leo in.</p>
            <Link to="contact" spy={true} smooth={true} duration={500}>
                <Button title=' Contact Us' />
            </Link>
        </div>
    </div>
  )
}

export default About