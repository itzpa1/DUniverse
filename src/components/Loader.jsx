import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

assets

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-white fixed top-0 bottom-0 left-0 right-0 z-[9999]  ">
            <div className=" w-[100px] h-[100px] border-[5px] rounded-full border-t-[#465fe9] border-r-[#465fe9] border-l-[#d5eaff] border-b-[#d5eaff] animate-spinLoader "></div>
            <div class="absolute">
                <Image className='w-10' loading="lazy" src={assets.preloader} alt="Preload" />
            </div>
        </div>
    )
}

export default Loader