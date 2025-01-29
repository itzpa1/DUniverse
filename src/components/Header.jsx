"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from './ui/dropdown-menu'

const Header = () => {

    const { setTheme } = useTheme()
    const header_link = [
        {
            title: 'Home',
            path: '#',
        },
        {
            title: 'Paper',
            path: '#',
        },
        {
            title: 'Study',
            path: '#',
        },
        {
            title: 'About Us',
            path: '#',
        },
        {
            title: 'Contact Us',
            path: '#',
        },
    ]

    return (
        <header>
            <div className="w-full">
                <div className="flex py-8 px-4 justify-between items-center">
                    <a href="/" className='h-10'>
                        <Image className='w-full h-full' loading='lazy' src={assets.logo1} alt='logo' />
                    </a>
                    <div className='flex items-center justify-between gap-8 '>
                        {header_link.map((items, index) => (
                            <Link className='text-lg font-semibold tracking-wide hover:text-blue-500 ' href={items.path} key={index}>
                                <p className='hover:text-blue-500'>{items.title}</p>
                            </Link>
                        ))}
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button varient="outline" size="icon">
                                <Sun color='white' className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ' />
                                <Moon color='white' className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 ' />
                                <span className='sr-only'>Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")} >Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")} >Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")} >System</DropdownMenuItem>
                        </DropdownMenuContent>

                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Header