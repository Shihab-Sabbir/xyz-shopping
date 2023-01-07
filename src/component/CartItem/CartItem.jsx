import React from 'react'
import { useState } from 'react';

function CartItem({ cartItem, handleRemove }) {
    const [count, setcount] = useState(1)
    const { image, productName, brand, price,_id } = cartItem;
    return (
        <div className='flex gap-4 items-center border p-2 shadow-md'>
            <img src={image} alt="" className='w-[100px] h-[80px]' />
            <div className='flex flex-col h-[70px] justify-evenly'>
                <p className='text-xs whitespace-nowrap' title={productName}>{productName.slice(0, 12) + '...'}</p>
                <p className='text-xs'>{brand}</p>
                <p className='text-xs'>${price}</p>
            </div>
            <div className='flex w-fit px-2 items-center'>
                <button className='border w-4' onClick={() => setcount(count + 1)}>+</button>
                <p className='px-1 border-t border-b'>{count}</p>
                <button className='border w-4' onClick={() => { count !== 1 && setcount(count - 1) }}>-</button>
            </div>
            <button className='text-red-600' onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    )
}

export default CartItem;