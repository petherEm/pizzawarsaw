import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="lg:h-28 overflow-hidden h-16 lg:px-16 px-8 bg-green-600 text-white font-semibold flex justify-between items-center shadow-lg">
            <div className="flex flex-col lg:inline-flex justify-between lg:gap-y-2">
                <span className="hidden lg:flex text-2xl italic">PierrePizza</span>
                <div className="flex lg:flex-col cursor-pointer items-center">
                    <button className="flex items-center gap-x-2 cursor-pointer">
                        <Image className="" src="/images/telephone.png" objectFit="contain" width={40} height={40} alt="call" />
                        <span className="hidden lg:flex">Order now</span>
                    </button>
                    <span>+48 123 456 789</span>
                </div>
            </div>

            <div className="hidden md:visible lg:flex">
                <ul className="flex lg:inline-flex gap-x-6 text-xl">
                    <li>Homepage</li>
                    <li>Products</li>
                    <li>Menu</li>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>

            <div className="flex lg:flex-end relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <div className="absolute -top-3 -right-2">🍕</div>
                <div className="absolute -top-4 -right-4">🍕</div>
                <div className="absolute -top-5 -right-6">🍕</div>
            </div>
        </div>
    )
}

export default Navbar
