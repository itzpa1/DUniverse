import { assets } from '@/assets/assets'
import ShadowCircle from '@/components/ShadowCircle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='relative w-full h-screen'>
            <ShadowCircle />
            <div className='flex flex-col justify-center items-center '>
                <div className='w-[400px]'>
                    <Image className='w-full h-full' loading="lazy" src={assets.error1} alt="error" />
                </div>
                <div className='flex flex-col items-center gap-2 '>
                    <h3 className='text-3xl font-semibold'>Oops... It looks like you ‘re lost !</h3>
                    <p className='text-xl font-medium'>Oops! The page you are looking for does not exist. It might have been moved or deleted</p>
                </div>
                <div className=''>
                    <Link className="default__button" href="#">Back To Home
                        <i className="icofont-simple-right"></i>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default NotFound