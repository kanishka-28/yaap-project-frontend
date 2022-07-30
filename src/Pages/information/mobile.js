import React from 'react'
import { Link } from 'react-router-dom'
import PlaneLayout from '../../layout/plane.layout'

const Mobile = () => {
    return (
        <PlaneLayout>
            <form>
                <div className='md:mt-56 flex flex-col m-3'>
                    <h2 className='font-bold text-4xl'>What's is your mobile number?</h2>
                    <p className='text-xs mt-4 text-gray-600'>It’s optional but it’ll only help us serve you better</p>
                    <div className='text-2xl h-12 border-gray-400 border-b-2 my-8 w-full'>
                        <input required className='outline-none' placeholder='e.g. 9876543210' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link to={'/info/thanks'}>
                            <button type='submit' className='px-5 py-1 rounded-full text-white bg-yellow-500'>Finish</button>
                        </Link>
                        <p className='text-xs text-gray-600'>Or press enter</p>
                    </div>
                    <div className='mt-32 flex gap-1'>
                        <div className='h-1 w-2 rounded-full bg-gray-400'></div>
                        <div className='h-1 w-2 rounded-full bg-gray-400'></div>
                        <div className='h-1 w-6 rounded-full bg-yellow-500'></div>
                    </div>
                </div>
            </form>
        </PlaneLayout>
    )
}

export default Mobile