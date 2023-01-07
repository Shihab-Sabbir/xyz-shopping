import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function ProductDetails() {
    const [product, setProduct] = useState({})
    const location = useLocation();
    const productId = location.pathname?.split('/')[2];
    useEffect(() => {
        axios.get('/products.json').then((res) => setProduct(...res.data?.filter(item => item._id === productId)))
    }, [location])

    const { category, productName, brand, _id, price, ratings, ratingsCount, image, discountPercentage, details } = product;
    const productRating = Array.from(Array(ratings).keys());
    const handleCart = () => {
        const productData = { category, productName, brand, _id, price, image }
        const cartItems = JSON.parse(localStorage.getItem('repliqProducts'));
        if (cartItems) {
            localStorage.setItem('repliqProducts', JSON.stringify([...cartItems, productData]));
            toast.success('Product added successfully');
        }
        else {
            localStorage.setItem('repliqProducts', JSON.stringify([productData]));
            toast.success('Product added successfully');
        }
    }
    return (
        <div className='p-2 max-w-[1000px] mx-auto min-h-screen '>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full max-w-[600px] lg:w-[600px]'>
                    <img src={image} alt="headphone" />
                    <div className='grid grid-cols-3 gap-2 w-full mt-2'>
                        <img className='w-full' src={image} alt="headphone" />
                        <img className='w-full' src={image} alt="headphone" />
                        <img className='w-full' src={image} alt="headphone" />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between p-2'>
                        <p className='text-lg font-semibold'>{productName}</p>
                        <span className='border px-1 rounded-lg bg-emerald-300 text-white border-none shadow-lg text-xs font-semibold uppercase flex justify-center items-center'>{discountPercentage || 20} % discount</span>
                    </div>
                    <div className='flex justify-between mb-1'>
                        <p className='px-2'>{brand}</p>
                        <span className='text-amber-300 flex gap-1 px-2 items-center'>
                            {
                                productRating?.map((rate, idx) => <AiFillStar />)
                            }
                            <b className='text-black -mt-1'>({ratingsCount})</b>
                        </span>
                    </div>
                    <div className='px-2'>
                        <span className='text-2xl'>$</span> <span className='text-lg'>{price}</span>
                        <span className='pl-2 line-through'>${(price * (1 + (parseFloat(discountPercentage || 20) / 100))).toFixed(2)}</span>
                    </div>
                    <p className='pl-2 pt-1'>
                        {details}
                    </p>
                    <div className='px-2'>
                        <Link onClick={handleCart}>
                            <button className='p-2 mt-4 bg-emerald-300 rounded-md text-white font-bold hover:scale-x-105 hover:bg-emerald-400'>Add to cart</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails;