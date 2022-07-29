import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginGoogle from '../components/login/googleLogin'
import LinkedInLogin from '../components/login/linkedinLogin'
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
                    <div className='flex h-full items-center justify-center'>
                        <div>
                            <LoginGoogle />
                            <br />
                            {/* <LinkedInLogin /> */}
                        </div>
                    </div>
                </PlaneLayout>
            }
        </>
    )
}

export default Login