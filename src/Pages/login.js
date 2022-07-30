import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginFacebook from '../components/login/facebookLogin'
import LoginGoogle from '../components/login/googleLogin'
import LoginTwitter from '../components/login/twitterLogin'
import { UserAuth } from '../context/auth/authContext'
import PlaneLayout from '../layout/plane.layout'
import Name from './information/name'

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
                    <div className='md:mt-52 flex flex-col sm:items-start px-4'>
                        <h2 className='font-bold sm:w-1/2 text-4xl mb-16'>Let’s begin by gathering up some useful information</h2>
                        <div className='flex h-full items-center justify-center'>
                            <div>
                                <LoginGoogle />
                                <br />
                                <LoginFacebook />
                                <br/>
                                <LoginTwitter/>
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