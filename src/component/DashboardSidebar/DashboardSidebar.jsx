import React, { useContext } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
function DashboardSidebar({ toggle }) {
    const { loggedUser } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className={`w-64 z-50 border-r dark:border-none shadow-xl dark:shadow dark:shadow-indigo-600 md:ml-0  md:block bg-white  dark:bg-gray-900 dark:text-gray-100 min-h-screen fixed  ${toggle ? 'duration-700  ml-0' : 'duration-700 -ml-64'}`}>
            <aside className="w-full  sm:w-60 ">
                <div className='flex items-center justify-between'>
                    <div className="flex cursor-pointer items-center gap-1 text-sm font-semibold tracking-widest uppercase text-amber-400 px-6 pt-1" onClick={() => navigate('/')}> <IoArrowBackSharp /> Home </div>
                </div>
                <nav className="space-y-8 p-6 text-sm flex flex-col justify-between items-center">
                    <div className='flex justify-center'>
                        <div className="space-y-5">
                            <h2 className="text-sm font-semibold tracking-widest uppercase text-black dark:text-gray-400">Admin Menu</h2>
                            <div className="flex flex-col space-y-4 justify-center items-center">
                                <NavLink to="/dashboard/users"
                                    end
                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}>All Users</NavLink>
                                <NavLink to="/dashboard/all-orders"
                                    end
                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}>All Orders</NavLink>
                                <NavLink to="/logout"
                                    end
                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}>Logout</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 text-center absolute bottom-8 flex items-center gap-4 border-t pt-4 border-amber-500">
                        <div className='flex flex-col items-start'>
                            <p className='text-sm font-semibold tracking-widest uppercase text-black dark:text-gray-400'>{loggedUser?.name}
                            </p>
                            <p className='text-black dark:text-gray-400'>{loggedUser?.phone}</p>
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    )
}

export default DashboardSidebar;



