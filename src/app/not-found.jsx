'use client'
import { assets } from '@/assets/assets'
import ShadowCircle from '@/components/ShadowCircle'
import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {

    const router = useRouter()

    return (
        <div className='relative w-full flex items-center justify-center h-screen'>
            <ShadowCircle />
            <div className='flex flex-col justify-center items-center '>
                <div className='w-[400px]'>
                    <Image className='w-full h-full' loading="lazy" src={assets.error1} alt="error" />
                </div>
                <div className='flex flex-col items-center leading-none '>
                    <h3 className='text-3xl font-semibold leading-tight'>Oops... It looks like you ‘re lost !</h3>
                    <p className='text-xl font-medium '>Oops! The page you are looking for does not exist. It might have been moved or deleted!</p>
                </div>
                <div className=''>
                    <Button onClick={() => router.push("/")} className='bg-primaryColor hover:bg-secondaryColor font-medium flex items-center gap-1'>
                        <Home />
                        <span className=''>Back To Home</span>
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default NotFound