import React from 'react'
import { Link } from 'react-router-dom'
import quarterCircle from "../assets/images/Exclude.png"
import logoyaap from "../assets/images/logoyaap.png"
import yellowCircle from "../assets/images/yellowCircle.svg"


const PlaneLayout = (props) => {
    return (
        <div className='h-screen sm:flex gap-64'>
            <div className=''>
                <Link to="/">
                    <img src={logoyaap} alt="home" className="relative ml-24 top-16" />
                </Link>
                <img src={quarterCircle} alt="home" className="h-96 relative bottom-10" />
                <img src={yellowCircle} alt="home" className="sm:relative sm:top-32 sm:ml-20" />
            </div>
            <div className=''>
                {props.children}
            </div>
        </div>
    )
}

export default PlaneLayout