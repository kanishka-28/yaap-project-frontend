import { ImFacebook } from 'react-icons/im'
import { useHistory } from 'react-router-dom';
import { UserAuth } from '../../context/auth/authContext';

function LoginFacebook() {

    const {facebookSignIn} = UserAuth();

    const ResponseSuccessfacebook = async (response) => {
        try {
            await facebookSignIn()
            console.log(response);
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
            <div onClick={ResponseSuccessfacebook} className='flex items-center cursor-pointer rounded-full shadow-lg'>
                <ImFacebook size={'2rem'} className='ml-2 pt-0.5 bg-white text-blue-500 border-8 border-blue-500 rounded-full' />
                <div className='px-2 w-44 text-center h-10 flex items-center cursor-pointer'>
                    <p className=''>Sign in with facebook</p>
                </div>
            </div>
        </>
    )
}

export default LoginFacebook;
