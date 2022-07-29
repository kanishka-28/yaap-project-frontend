import React, { useState } from 'react';

import { useLinkedIn } from 'react-linkedin-login-oauth2';

function LinkedInLogin() {
    const { linkedInLogin } = useLinkedIn({
        clientId: '776yfvqnpgz96u',
        redirectUri: `${window.location.origin}/signin-linkedin`,
        onSuccess: (code) => {
            console.log(code);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <div className='w-44 h-10 mx-auto bg-linkedin mx-auto flex items-center cursor-pointer' onClick={linkedInLogin}>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png'}
                alt="Sign in with Linked In"
                className='w-10 h-10'
            />
            <p className='text-white'>login with linked in</p>
        </div>
    );
}

export default LinkedInLogin;