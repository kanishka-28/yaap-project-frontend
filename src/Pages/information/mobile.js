import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PlaneLayout from '../../layout/plane.layout'
import { UserAuth } from '../../context/auth/authContext';
import { mailSender } from '../../services/api';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Mobile = () => {

    const { user } = UserAuth();
    const [mobile, setmobile] = useState('');
    const [id, setid] = useState("");
    const history = useHistory();

    const sendMail = (e) => {
        e.preventDefault();
        try {
            Promise.resolve(mailSender(user?.email, user?.displayName)).then((res) => {
                console.log(res);
            })
        } catch (error) {
            console.log({ error });
        }
        history.push('/info/thanks');
    }

    useEffect(() => {
        const userCollectionRef = collection(db, 'users');
        getDocs(userCollectionRef).then((res) => {
            const users = res?.docs?.map((doc) => (
                {
                    data: doc.data(),
                    id: doc.id,
                })
            )
            users.map((el) => {
                if (el?.data?.email === user?.email) {
                    setmobile(el?.data?.mobile)
                    setid(el?.id);
                }
            })
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    const handleChange = async (e) => {
        e.preventDefault();
        setmobile(e.target.value);
        const userDocRef = doc(db, "users", id)
        updateDoc(userDocRef, {
            mobile: e.target.value,
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <PlaneLayout>
            <form onSubmit={sendMail}>
                <div className='md:mt-56 flex flex-col m-3'>
                    <h2 className='font-bold text-4xl'>What's is your mobile number?</h2>
                    <p className='text-xs mt-4 text-gray-600'>It’s optional but it’ll only help us serve you better</p>
                    <div className='text-2xl h-12 border-gray-400 border-b-2 my-8 w-full'>
                        <input value={mobile} type={'number'} onChange={handleChange} className='w-full outline-none' placeholder='e.g. 9876543210' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <button type='submit' className='px-5 py-1 rounded-full text-white bg-yellow-500'>Finish</button>
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