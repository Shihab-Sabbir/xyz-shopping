import React from 'react'

function AddProduct() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border rounded-lg shadow-md p-4'>
                <p className='text-center text-2xl font-extrabold pb-4'>Add Product</p>
                <div className='my-3'>
                    <form action="" className='flex flex-col gap-3 px-3'>
                        <input className='h-8 px-2 border border-emerald-300 rounded-md' type="text" placeholder='Product Name' />
                        <input className='h-8 px-2 border border-emerald-300 rounded-md' type="text" placeholder='Company' />
                        <input className='h-8 px-2 border border-emerald-300 rounded-md' type="text" placeholder='Model' />
                        <input className='h-8 px-2 border border-emerald-300 rounded-md' type="number" placeholder='Price' />
                        <p>Upload Product Image</p>
                        <input className='h-8 px-2 border border-emerald-300 rounded-md' type="file" placeholder='image' />
                        <button className='px-2 py-1 border rounded-md w-full uppercase text-sm font-bold border-emerald-300 bg-emerald-300 text-white hover:text-emerald-300 hover:bg-white mt-4'>Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;