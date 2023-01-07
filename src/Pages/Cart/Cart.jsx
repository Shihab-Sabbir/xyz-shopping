import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartItem from '../../component/CartItem/CartItem'
function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(0);
    const [reload, setReload] = useState(false)
    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('repliqProducts')));
    }, [reload])

    useEffect(() => {
        const productPrice = cartItems?.map(item => parseFloat(item.price));
        setPrice(productPrice?.reduce((prev, curr) => prev + curr, 0))
    }, [cartItems])

    const handleRemove = (id) => {
        const remainingProducts = cartItems?.filter(item => item._id !== id);
        localStorage.setItem('repliqProducts', JSON.stringify(remainingProducts));
        toast.success('Item removed successfully')
        setReload(!reload)
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border rounded-lg shadow-md p-4 min-w-[300px]'>
                <p className='text-center text-2xl font-extrabold pb-4'>Cart</p>
                {(!cartItems || cartItems?.length === 0) && <p className='text-center text-red-600 my-3 min-h-[100px]'>No item in cart ! <Link to='/products' className='block py-2 border w-fit px-2 rounded-md text-xs uppercase bg-green-300 text-white font-bold mt-4 mx-auto'>Shop Now</Link></p>}
                {cartItems?.length > 0 && <div className='my-3 max-h-[300px] overflow-auto'>
                    {cartItems?.map((cartItem) => <CartItem key={cartItem._id} cartItem={cartItem} handleRemove={handleRemove} />)}
                </div>}
                {cartItems?.length > 0 && <div>
                    <p>Product Price : ${price}</p>
                    <p>Tax Added : ${(price * .10).toFixed(2)}</p>
                    <p>Delivery Charge : $10</p>
                    <p className='py-2 font-semibold text-lg'>Total : ${((price * .10) + price + 10).toFixed(2)}</p>
                    <div>
                        <Link to='/checkout'>
                            <button className='px-2 py-1 border rounded-md w-full uppercase text-sm font-bold border-emerald-300 bg-emerald-300 text-white hover:text-emerald-300 hover:bg-white mt-4'>Checkout</button>
                        </Link>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Cart;