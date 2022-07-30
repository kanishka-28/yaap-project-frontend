import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/auth/authContext'
import PlaneLayout from '../../layout/plane.layout'

const Name = () => {

    const { user, logout } = UserAuth();
    const [name, setname] = useState(user?.displayName);

    return (
        <PlaneLayout>
            <form>
                <div className='md:mt-56 flex flex-col m-3'>
                    <h2 className='font-bold text-4xl'>What's is your name?</h2>
                    <p className='text-xs mt-4 text-gray-600'>Please provide us with your real name</p>
                    <div className='text-2xl h-12 border-gray-400 border-b-2 my-8 w-full'>
                        <input required value={name} onChange={(e) => setname(e.target.value)} className='outline-none' placeholder='e.g. John doe' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link to={'/info/email'}>
                            <button type='submit' className='px-5 py-1 rounded-full text-white bg-yellow-500'>Next</button>
                        </Link>
                        <p className='text-xs text-gray-600'>Or press enter</p>
                    </div>
                    {/* <div className='flex items-center gap-4'>
                    <button onClick={logout} className='px-5 py-1 rounded-full text-white bg-red-500'>logout</button>
                    <p className='text-xs text-gray-600'>Or press enter</p>
                </div> */}
                    <div className='mt-32 flex gap-1'>
                        <div className='h-1 w-6 rounded-full bg-yellow-500'></div>
                        <div className='h-1 w-2 rounded-full bg-gray-400'></div>
                        <div className='h-1 w-2 rounded-full bg-gray-400'></div>
                    </div>
                </div>
            </form>
        </PlaneLayout>
    )
}

export default Name