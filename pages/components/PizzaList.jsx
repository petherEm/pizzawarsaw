import React from 'react'
import PizzaCard from './PizzaCard'


const PizzaList = () => {
    return (
        <div className="flex flex-col lg:p-20 md:p-20 items-center">
            <h1 className="text-4xl uppercase font-bold">🍕🍕Bite Best Pizza in Town🍕🍕</h1>
            <p className="w-[70%] py-10 text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias debitis consequatur, eveniet porro itaque provident, dicta dolores reprehenderit vero fugiat corrupti ab unde aut sapiente labore ipsam tempore quam?

            </p>
            <div className="w-[80%] flex flex-wrap gap-x-4 items-center justify-center">
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList
