import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../UserContext/UserContext';

function Logout() {
    const { loggedUSer, setLoggedUSer } = useContext(AuthContext);
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(loggedUSer)
    }, [loggedUSer])
    
    const navigate = useNavigate();
    const handleLogout = () => {
        setLoggedUSer({});
        localStorage.removeItem('repliq-current-user')
        toast.success('Logout Successful');
        navigate('/login')
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border rounded-lg shadow-md p-4 w-96'>
                <p className='text-center text-2xl font-extrabold pb-4'>Logout</p>
                <div className='my-3'>
                    <p className='font-semibold'>Current user</p>
                    <p>Name : {user.name}</p>
                    <p>Phone Number : {user.phone}</p>
                    <button onClick={handleLogout} className='px-2 py-1 border rounded-md w-full uppercase text-sm font-bold border-emerald-300 bg-emerald-300 text-white hover:text-emerald-300 hover:bg-white mt-4'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout;