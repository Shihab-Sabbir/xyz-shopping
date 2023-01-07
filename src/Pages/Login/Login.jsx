import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs'
import { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import { toast } from 'react-toastify';

function Login() {
    const { loggedUSer, setLoggedUSer } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const password = form.password.value;
        const data = JSON.parse(localStorage.getItem('repliq-register'));
        if (data) {
            const userExist = data?.find(user => (user.phone === phone && user.password === password));
            if (userExist) {
                setLoggedUSer(userExist);
                localStorage.setItem('repliq-current-user', JSON.stringify(userExist))
                toast.success('Successfully logged in !');
                navigate('/logout')
            }
            else {
                toast.error('User not exist or wrong login informations')
            }

        }
        else {
            toast.error('User not exist !')
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border rounded-lg shadow-md p-4 w-96'>
                <p className='text-center text-2xl font-extrabold pb-4'>Login</p>
                <div className='my-3'>
                    <form action="" className='flex flex-col gap-3 px-3' onSubmit={handleLogin}>
                        <input required name='phone' className='h-8 px-2 border border-emerald-300 rounded-md' type="tel" placeholder='Phone' />
                        <input required name='password' className='h-8 px-2 border border-emerald-300 rounded-md' type="password" placeholder='Password' />
                        <button type='submit' className='px-2 py-1 border rounded-md w-full uppercase text-sm font-bold border-emerald-300 bg-emerald-300 text-white hover:text-emerald-300 hover:bg-white mt-4'>Login</button>
                        <div className='text-xs'>
                            <p className='pt-2'>Forget Password ? <Link className='text-blue-500'>Click here</Link></p>
                            <p className='pt-2 mb-4'>Don't have an account ? <Link to='/register' className='text-blue-500'>Register</Link></p>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <hr className='border-t border-black h-0 w-20' />
                            <p>Or</p>
                            <hr className='border-t border-black h-0 w-20' />
                        </div>
                        <div className='text-center mt-8'>
                            <button className='px-2 py-1 border rounded-md w-full uppercase text-sm font-bold border-emerald-300 hover:text-white hover:bg-emerald-300 flex justify-center gap-2 items-center'><BsGoogle /> Login With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;