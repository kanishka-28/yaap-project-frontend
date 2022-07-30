import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc'
import { useHistory } from 'react-router-dom';
import { UserAuth } from '../../context/auth/authContext';
// import { Googlebutton } from 'react-google-button'

function LoginGoogle() {

    // const ResponseSuccessGoogle = async (response) => {
    //     console.log(response);
    // }
   
    const {googleSignIn} = UserAuth();

    const ResponseSuccessGoogle = async (response) => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {/* <div className="flex">
                <div className="m-auto rounded-lg">
                    <GoogleLogin
                        clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={ResponseSuccessGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div> */}
            <div onClick={ResponseSuccessGoogle} className='flex items-center cursor-pointer rounded-full shadow-lg'>
                <FcGoogle size={'2rem'} className='ml-2 pt-0.5 bg-white text-blue-500  rounded-full' />
                <div className='px-2 w-44 text-center h-10 flex items-center cursor-pointer'>
                    <p className=''>Sign in with Google</p>
                </div>
            </div>
        </>
    )
}

export default LoginGoogle;
