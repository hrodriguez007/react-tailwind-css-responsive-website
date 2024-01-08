import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-between p-5 bg-red-200 border-1 border-lightPurple md:px-32 px-5">
        <p>© Heidy Rodriguez 2024
                <span className=' text-lightPurple px-2'>Images from pch.vector on Freepik</span></p>
            <div>
                <Link to="/" className='font-semibold text-3xl p-1 cursor-pointer text-white'>StudyBro</Link>
            </div>
        </div>
        <div className=' text-center mt-4 pb-5'>
            </div>
    </div>
  )
}

export default Footer