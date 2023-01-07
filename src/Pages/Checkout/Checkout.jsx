import React from 'react'

function Checkout() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border rounded-lg shadow-md p-8 px-10 w-96'>
                <p className='text-center text-2xl font-extrabold pb-4'>Checkout</p>
                <p>Product Quantity : 6 unit</p>
                <p>Product Price : $600</p>
                <p>Tax Added : $60</p>
                <p className='pb-2'>Delivery Charge : $10</p>
                <hr />
                <p className='py-2 font-semibold text-lg'>Total : $670</p>
                <form action="" className='flex flex-col gap-3 '>
                    <p>Delivery Details</p>
                    <input className='h-8 px-2 border border-emerald-300 rounded-md' type="text" placeholder='Name' />
                    <input className='h-8 px-2 border border-emerald-300 rounded-md' type="text" placeholder='Adress' />
                    <input className='h-8 px-2 border border-emerald-300 rounded-md' type="tel" placeholder='Phone Number' />
                    <input className='h-8 px-2 border border-emerald-300 rounded-md' type="email" placeholder='Email' />
                </form>
                <div>
                    <button className='px-2 py-1 border rounded-md w-full uppercase text-sm font-bold border-emerald-300 bg-emerald-300 text-white hover:text-emerald-300 hover:bg-white mt-4'>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;