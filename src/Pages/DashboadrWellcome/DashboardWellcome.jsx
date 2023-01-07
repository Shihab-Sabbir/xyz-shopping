import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
function DashboardWellcome() {

    const { loggedUSer } = useContext(AuthContext);

    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='pt-[150px] text-center text-3xl font-extrabold text-black dark:text-slate-200'>Wellcome <span className='text-green-400 capitalize'>{loggedUSer?.name}</span></p>
            <img src='' className='lg:w-[600px]' />
        </div>

    )
}

export default DashboardWellcome;