import React from 'react';
import {Link} from 'react-scroll';
import Button from '../layout/Button';

const Home = () => {
    return (
        <div className=' min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
            <div className=' md:w-2/4 text-center'>
                <h2 className=' text-5xl font-semibold leading-tight'>Gain mastery with</h2>
                <span className=' text-5xl font-semibold text-lightPurple'>StudyBro</span>
                <p className=' text-lightText mt-5 text-start'>StudyBro is the way to get the most learning out of all the time that you have to give. With the eLearning platform found with our program, you are able to discover the endless library of courses that have focuses ranging from the academics to the practical workplace skills.
                </p>

                <Link to="contact" spy={true} smooth={true} duration={500}>
                <Button title="Contact Us" />
                </Link>
            </div>

            <div className='pb-8'></div>
            <div className=' w-full md:w-2/4 pl-15'>
                <img src='src\assets\13038.jpg' alt='Image by pch.vector on Freepik' />
            </div>
        </div>
    )
}

export default Home