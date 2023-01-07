import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'

function Product({ product }) {
    const { category, productName, brand, _id, price, ratings, ratingsCount, image, discountPercentage, details } = product;
    const productRating = Array.from(Array(ratings).keys());
    return (
        <div className='w-[300px] h-[420px] border'>
            <img src={image} alt="headphone image" className='w-full h-[200px]' />
            <div className='flex justify-between p-2'>
                <p className='text-lg font-semibold'>{productName.slice(0, 17)}</p>
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
                {details.slice(0, 70)}
            </p>
            <div className='px-2'>
                <Link to={`/product-details/${_id}`} >
                    <button className='p-2 mt-4 bg-emerald-300 rounded-md text-white font-bold hover:scale-x-105 hover:bg-emerald-400 text-xs uppercase'>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Product;


