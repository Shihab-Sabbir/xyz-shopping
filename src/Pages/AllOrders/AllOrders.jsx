import React, { useEffect } from 'react'
import { useState } from 'react';

function AllOrders() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('repliqProducts'));
        setData(users)
    }, [])
    console.log(data)
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-1 lg:p-2 xl:p-4">
            {(data?.length > 0) ?
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 text-amber-400  px-6 text-center">
                                Delete
                            </th>
                            <th scope="col" className="py-3 text-amber-400 px-6 text-center">
                                Product Name
                            </th>
                            <th scope="col" className="py-3 text-amber-400 px-6 text-center">
                                Image
                            </th>
                            <th scope="col" className="py-3 text-amber-400 px-6 text-center">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((product, idx) =>
                                <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center p-1">
                                    <td className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline" >
                                        Remove
                                    </td>
                                    <td className="p-4 text-xs max-w-[150px] font-semibold text-center">
                                        {product.productName}
                                    </td>
                                    <td className="p-4 max-w-[150px] text-xs font-semibold text-center">
                                        <img className='w-[100px] h-[90px] mt-1 rounded-lg mx-auto' src={product.image} alt="" />
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        ${product.price}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> : <p className='text-center dark:text-white text-black uppercase font-bold py-[18%]'>No order found !</p>}
        </div>
    )
}

export default AllOrders;