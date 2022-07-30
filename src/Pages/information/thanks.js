import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PlaneLayout from '../../layout/plane.layout'

const Thanks = () => {

    const history = useHistory();

    useEffect(() => {
      setTimeout(() => {
        window.location.href = "https://spatial.io/s/Yaap-Main-Venue-62d717a487de560001106ab9";
      }, 3000);      
    }, []);
    

    return (
        <PlaneLayout>
            <div className='md:mt-56 flex flex-col m-3'>
                <h2 className='font-bold text-4xl'>Thank you!</h2>
                <p className='text-xs mt-4 text-gray-600'>You will now be redirected to our event page. <span className='text-yellow-600'>Click here </span>if you are still not redirected</p>
            </div>
        </PlaneLayout>
    )
}

export default Thanks