import React from 'react'
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

function Home() {
    return (
        <div className='min-h-screen'>
            <div className='w-full'>
                <img className='w-full' src="https://t4.ftcdn.net/jpg/03/65/85/47/360_F_365854716_ZHB0YN3i3s0H7NjI9hiezH53D5nvoF0E.jpg" alt="banner" />
            </div>
            <p className='text-center py-4 text-lg font-extrabold'>Top Products</p>
            <Products />
            <Link className='flex justify-center' to='/products'>
                <button className='px-2 py-1 border rounded-md w-fit uppercase text-sm font-bold border-emerald-300 bg-emerald-300 text-white hover:text-emerald-300 hover:bg-white my-4 lg:my-12'>
                    Explore More
                </button>
            </Link>
        </div>
    )
}

export default Home;