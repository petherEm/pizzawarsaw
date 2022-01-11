import React from 'react'
import Image from 'next/image'


const Featured = () => {
    const images = [
        "/images/f1.png",
        "/images/f2.png",
        "/images/f3.png"
    ]

    return (
        <div className="bg-green-500 w-full flex flex-col lg:flex-row gap-x-12 lg:p-32 p-4 items-center lg:justify-between justify-center">
            <Image className="flex flex-1" src="/images/f1.png" width="500" height="500" alt="featuredImg" />
            <div className="flex flex-1 w-full flex-col gap-y-6 items-center mt-4">
                <h1 className="lg:text-6xl text-4xl font-bold text-white">Order Two, Pay for One!</h1>
                <h2 className="lg:text-4xl text-2xl font-semibold text-gray-100">Best Pizza in Warsaw</h2>
                <div className="flex lg:inline-flex lg:gap-x-4 gap-x-6">
                    <button className="bg-indigo-500 p-3 text-white font-semibold rounded-md hover:bg-indigo-700 hover:scale-110 cursor-pointer">Order Now </button>
                    <button className="bg-fuchsia-700 p-3 text-white font-semibold rounded-md hover:bg-fuchsia-800 hover:scale-110 cursor-pointer">Book a table</button>
                
                </div>
                
            </div>
           
        </div>
    )
}

export default Featured
