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
            <div onClick={ResponseSuccessGoogle} className='flex items-center cursor-pointer'>
                <FcGoogle size={'2.5rem'} className='bg-white border border-blue-500' />
                <div className='px-2 h-10 bg-blue-500 flex items-center cursor-pointer mx-auto '>
                    <p className='bg-blue-500 text-white'>login with google</p>
                </div>
            </div>
        </>
    )
}

export default LoginGoogle;
