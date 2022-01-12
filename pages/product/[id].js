import React, { useState } from 'react'
import Image from 'next/image'

const Product = () => {
    const [size, setSize] = useState(0);


    const pizza = {
        id: 1,
        img: "/images/f1.png",
        name: "Campagnola",
        price: [31, 33, 36],
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, accusantium!"

    }

    return (
        <div className="lg:flex justify-center lg:px-32 lg:py-16 px-10 py-4">
            <div className="lg:flex justify-center">
                <div className="w-full flex mr-28 justtify-center mb-10">
                    <Image
                         
                        src={pizza.img} 
                        width="500" 
                        height="500" 
                        alt="pizza" 
                    />
                </div>    
                <div className="lg:flex flex-col">
                    <h1 className="text-3xl font-semibold">{pizza.name}</h1>
                    <span className="text-xl">{pizza.price[size]} PLN</span>
                    <p className="mb-4">{pizza.desc}</p>
                    <h1 className="mb-4 font-semibold">Choose the size:</h1>
                    <div className="flex items-center mr-2">
                        <div className="lg:flex flex-col text-center items-center lg:p-4 lg:gap-x-2 cursor-pointer" onClick={()=>setSize(0)}>
                            <Image 
                                src="/images/size.png" 
                                width="60" 
                                height="60" 
                                alt="" 
                            />
                            <span>Small</span>
                        </div>
                        <div className="lg:flex flex-col text-center items-center lg:p-4 lg:gap-x-2 cursor-pointer" onClick={()=>setSize(1)}>
                            <Image 
                                src="/images/size.png" 
                                width="80" 
                                height="80" 
                                alt="" 
                            />
                            <span>Medium</span>
                        </div>
                        <div className="lg:flex flex-col text-center items-center lg:p-4 lg:gap-x-2 cursor-pointer" onClick={()=>setSize(2)}>
                            <Image 
                                src="/images/size.png" 
                                width="100" 
                                height="100" 
                                alt="" 
                            />
                            <span>Large</span>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-2xl mt-4">Choose additional ingredients:</h1>
                        <div className="flex-col mt-2">
                            <div className="flex items-center mb-4">
                                <input type="checkbox" id="double" name="double" className="w-6 h-6 mr-2"/>
                                <label htmlFor="double">Double Ingredients</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" id="garlic" name="garlic" className="w-6 h-6 mr-2"/>
                                <label htmlFor="double">Garlic</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" id="tomato" name="tomato" className="w-6 h-6 mr-2"/>
                                <label htmlFor="double">Extra tomato</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input className="border mr-2 w-28 h-14 rounded-lg p-4" type="number" defaultValue={1}/>
                        <button className="bg-indigo-500 hover:bg-indigo-700 py-4 px-6 rounded-lg text-white font-semibold">Add to Cart</button>
                    </div>
                </div>
                


            </div>
        </div>
    )
}

export default Product
