import React from 'react'
import Image from 'next/image'

const PizzaCard = () => {
    return (
        <div className="flex flex-col items-center p-4 cursor-pointer">
            <Image src="/images/f2.png" width="200" height="200" alt="pizza" />
            <h2 className="text-2xl font-semibold text-green-900 mt-4">Capriciosa</h2>
            <p><span className="font-bold">Price: </span>34 PLN</p>
            <p className="text-gray-600 italic">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
    )
}

export default PizzaCard
