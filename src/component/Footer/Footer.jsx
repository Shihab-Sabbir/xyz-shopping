import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'


function Footer() {
    return (
        <div className='w-full bg-emerald-300 p-4'>
            <p className='text-center font-extrabold text-2xl text-white p-4'>XYZ Shopping</p>
            <p className='text-center text-white'>7/11 Tajmahal Road</p>
            <p className='text-center text-white'>Mohammadpur, Dhaka</p>
            <p className='text-center text-white'>Contact: +8801521255003</p>
            <p className='text-center text-white'>Email: shihab11231@gmail.com</p>
            <p className='text-lg font-extrabold pt-8'>Follow us on</p>
            <div className='text-xl flex gap-3 mt-4'>
                <BsFacebook />
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillInstagram />
            </div>
            <p className='pt-4'>Copyright © 2020 All Rights Reserved by SRS Production</p>
        </div>
    )
}

export default Footer;