import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginFacebook from '../components/login/facebookLogin'
import LoginGoogle from '../components/login/googleLogin'
import LinkedInLogin from '../components/login/linkedinLogin'
import { UserAuth } from '../context/auth/authContext'
import PlaneLayout from '../layout/plane.layout'
import Name from './Information/name'

const Login = () => {

    const { user } = UserAuth();
    const history = useHistory();

    useEffect(() => {
        //   if(user){
        //     history.push('/info/name');
        //   }
    }, [])


    return (
        <>
            {user?.email ? <Name /> :
                <PlaneLayout>
                    <div className='md:mt-56 flex flex-col'>
                        <h2 className='font-bold w-1/2 text-4xl'>Let’s begin by gathering up some useful information</h2>
                        <div className='flex h-full items-center justify-center'>
                            <div>
                                <LoginGoogle />
                                <br />
                                <LoginFacebook />
                                {/* <LinkedInLogin /> */}
                            </div>
                        </div>
                    </div>
                </PlaneLayout>
            }
        </>
    )
}

export default Login