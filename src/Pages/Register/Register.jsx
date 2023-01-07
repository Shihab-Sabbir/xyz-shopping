import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const data = localStorage.getItem('repliq-register');
        if (data) {
            setUsers(JSON.parse(data));
        }
    }, [reload])

    console.log(users)

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const user = { name, phone, password };

        if (users.length>0) {
            const alreadyExist = users?.find(user => user.phone === phone);
            if (alreadyExist) {
                toast.error('User already exists')
            }
            else {
                localStorage.setItem('repliq-register', [...users, JSON.stringify(user)])
                toast.success('Registration successful.');
                setReload(!reload)
                navigate('/login')
            }
        }
        else {
            const newUser = new Array(user);
            localStorage.setItem('repliq-register', JSON.stringify(newUser));
            toast.success('Registration successful.');
            setReload(!reload)
            navigate('/login')
        }

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border rounded-lg shadow-md p-4 w-96'>
                <p className='text-center text-2xl font-extrabold pb-4'>Register</p>
                <div className='my-3'>
                    <form action="" className='flex flex-col gap-3 px-3' onSubmit={handleSubmit}>
                        <input required className='h-8 px-2 border border-emerald-300 rounded-md' name='name' type="text" placeholder='Name' />
                        <input required className='h-8 px-2 border border-emerald-300 rounded-md' name='phone' type="tel" placeholder='Phone Number' />
                        <input required className='h-8 px-2 border border-emerald-300 rounded-md' name='password' type="password" placeholder='Password' />
                        <input type='submit' value='Register' className='cursor-pointer px-2 py-1 border rounded-md w-full uppercase text-sm font-bold border-emerald-300 bg-emerald-300 text-white hover:text-emerald-300 hover:bg-white mt-4' />
                        <div className='text-xs'>
                            <p className='pt-2 mb-4'>Already have an account ? <Link to='/login' className='text-blue-500'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register