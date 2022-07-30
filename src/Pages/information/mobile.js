import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import PlaneLayout from '../../layout/plane.layout'
import { UserAuth } from '../../context/auth/authContext';
import { mailSender } from '../../services/api';

const Mobile = () => {

    const { user } = UserAuth();
    const history = useHistory();

    const email = user?.email;
    const sendMail = (e) => {
        e.preventDefault();
        try {
            console.log(user?.email);
            Promise.resolve(mailSender(email)).then((res) => {
                console.log(res);
            }).then(()=>{
                history.push('/info/thanks');
            })
        } catch (error) {
            console.log({ error });
        }
    }

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
                            <button onClick={sendMail} type='submit' className='px-5 py-1 rounded-full text-white bg-yellow-500'>Finish</button>
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