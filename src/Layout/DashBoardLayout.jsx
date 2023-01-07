import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import DashboardSidebar from '../component/DashboardSidebar/DashboardSidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { toast } from 'react-toastify';
function DashBoardLayout() {
    const { loggedUSer } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    console.log(loggedUSer)
    if (!loggedUSer) {
        toast.error('Please Login First')
        return <Navigate to='/login' replace={true}></Navigate>
    }

    else {
        return (
            <div className='flex'>
                <div>
                    <DashboardSidebar toggle={toggle} />
                </div>
                <div className={`w-full pt-2 min-h-screen md:ml-64 bg-gray-100 dark:bg-[#0f172a]`}>
                    <div className='flex justify-between md:hidden p-1'>
                        <img src='' className='w-[30%]' alt="" />
                        <div className='mx-4 rounded-md flex justify-center items-center'>
                            <AiOutlineMenu className='text-xl text-black dark:text-white cursor-pointer' title='click to open menu' onClick={handleToggle} />
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        )
   }
}

export default DashBoardLayout;