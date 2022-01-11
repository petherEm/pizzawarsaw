import React from 'react'

const Footer = () => {
    return (
        <div className="bg-green-500 p-10 flex flex-col items-center text-white justify-center">
            <div className="w-[80%] lg:flex justify-between">
                <div className="">
                    <h2 className="text-2xl uppercase font-semibold mb-2">Working Hours:</h2>
                    <p className="text-xl">Mon - Fri: 12:00 - 23:00</p>
                    <p className="text-xl">Sat - Sun: 12:00 - 24:00</p>

                </div>
                <div className="">
                    <h2 className="text-2xl uppercase font-semibold mb-2">
                        Our restaurants:
                    </h2>
                    <div className="flex items-center gap-x-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="red">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xl">Al. Jana Pawla 44/323</p>
                    </div>
                    <div className="flex items-center gap-x-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="red">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xl">Al. Jerozolimskie 999/32</p>
                    </div>
                    <div className="flex items-center gap-x-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="red">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xl">Al. Solidarnosci 666/32</p>
                    </div>
                    
                </div>
            </div>
            <div>
                <h3 className="text-xl">Created with 💗 by <a href="https://www.piotrmaciejewski.com" target="_blank"><span className="font-semibold">Piotr.</span></a> All rights reserved.</h3>
            </div>
           
        </div>
    )
}

export default Footer
