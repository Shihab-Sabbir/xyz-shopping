import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Product from '../../component/Product/Product'

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/products.json').then((response) => { setProducts(response.data) });
    }, [])

    return (
        <div className='p-2 flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}

export default Products;