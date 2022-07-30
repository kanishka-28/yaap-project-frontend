import React from 'react'
import { Link } from 'react-router-dom'
import quarterCircle from "../assets/images/Exclude.png"
import logoyaap from "../assets/images/logoyaap.png"
import yellowCircle from "../assets/images/yellowCircle.svg"
import semiCircle from "../assets/images/semicircle.svg"


const PlaneLayout = (props) => {
    return (
        <div className='h-screen sm:flex gap-64'>
            <div className='flex flex-col items-center'>
                <Link to="/">
                    <img src={logoyaap} alt="home" className="hidden sm:block relative top-16" />
                    <img src={logoyaap} alt="home" className="block sm:hidden relative self-center top-20" />
                </Link>
                <img src={quarterCircle} alt="home" className="hidden sm:block h-96 w-96 relative bottom-10" />
                <img src={semiCircle} alt="home" className="block sm:hidden relative bottom-12" />
                <img src={yellowCircle} alt="home" className="hidden sm:block relative sm:top-32 sm:ml-20" />
            </div>
            <div className=''>
                {props.children}
            </div>
        </div>
    )
}

export default PlaneLayout