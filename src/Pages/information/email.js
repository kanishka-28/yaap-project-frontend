import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/auth/authContext'
import PlaneLayout from '../../layout/plane.layout'

const Email = () => {
    const { user } = UserAuth();

    return (
        <PlaneLayout>
            <form>
                <div className='md:mt-56 flex flex-col m-3'>
                    <h2 className='font-bold text-4xl'>What's is your Email?</h2>
                    <p className='text-xs mt-4 text-gray-600'>Please provide us with a valid email</p>
                    <div className='text-2xl h-12 border-gray-400 border-b-2 my-8 w-full'>
                        <input value={user?.email} className='w-full outline-none text-gray-500' placeholder='e.g. John doe' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link to={'/info/mobile'}>
                            <button type='submit' className='px-5 py-1 rounded-full text-white bg-yellow-500'>Next</button>
                        </Link>
                        <p className='text-xs text-gray-600'>Or press enter</p>
                    </div>
                    <div className='mt-32 flex gap-1'>
                        <div className='h-1 w-2 rounded-full bg-gray-400'></div>
                        <div className='h-1 w-6 rounded-full bg-yellow-500'></div>
                        <div className='h-1 w-2 rounded-full bg-gray-400'></div>
                    </div>
                </div>
            </form>
        </PlaneLayout>
    )
}

export default Email