import React from 'react'
import Heading from '../layout/Heading'
import webImg from '../assets/export-2024-01-06 223859.svg'
import appImg from '../assets/export-2024-01-06 225225.svg'
import graphicImg from '../assets/export-2024-01-06 224741.svg'
import digitalImg from '../assets/export-2024-01-06 224526.svg'
import CoursesCard from '../layout/CoursesCard'


const Courses = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
    <Heading title1="Our" title2="Courses"/>
    <div className=' flex flex-wrap justify-center gap-6 mt-6'>
        <CoursesCard img={webImg} title="Web Development" />
        <CoursesCard img={appImg} title="App Development" />
        <CoursesCard img={graphicImg} title="Graphic Designer" />
        <CoursesCard img={digitalImg} title="Digital Marketing" />
    </div>

    </div>
  )
}

export default Courses