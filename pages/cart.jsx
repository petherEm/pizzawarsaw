import React from 'react'
import Image from 'next/image'

const Cart = () => {
    return (
        <div className="flex items-center justify-center">

             <div className="lg:w-[80%] lg:p-32 p-4 lg:flex flex-col justify-between">
             <div className="text-center">
                <table className="flex-col">
                    <tr >
                        <th className="lg:px-6">Product</th>
                        <th className="lg:px-6">Name</th>
                        <th className="lg:px-6">Extras</th>
                        <th className="lg:px-6">Price</th>
                        <th className="lg:px-6">Quantity</th>
                        <th className="lg:px-6">Total</th>
                    </tr>
                    <tr>
                        <td>
                            <Image src="/images/f1.png" width="160" height="160" alt="" objectFit="cover" />
                        </td>
                        <td>
                            Picante
                        </td>
                        <td>
                            <span>Double ingredients, spicy sauce</span>
                        </td>
                        <td>
                            <span>36 PLN</span>
                        </td>
                        <td>
                            <span>2</span>
                        </td>
                        <td>
                            <span className="font-semibold">72 PLN</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image src="/images/f1.png" width="160" height="160" alt="" objectFit="cover" />
                        </td>
                        <td>
                            Picante
                        </td>
                        <td>
                            <span>Double ingredients, spicy sauce</span>
                        </td>
                        <td>
                            <span>36 PLN</span>
                        </td>
                        <td>
                            <span>2</span>
                        </td>
                        <td>
                            <span className="font-semibold">72 PLN</span>
                        </td>
                    </tr>
                </table>
        </div>


        <div className="bg-fuchsia-300 p-6 px-12 shadow-lg">
                <div>
                    <h2 className="text-xl font-bold mb-2">CART TOTAL</h2>
                    <div>
                        <b>Subtotal:</b> 72 PLN
                    </div>
                    <div>
                        <b>Discount:</b> 0 PLN
                    </div>
                    <div>
                        <b>Total:</b> 72 PLN
                    </div>
                    <button className="bg-green-500 text-white font-semibold p-4 mt-4 rounded-lg hover:bg-green-600 cursor-pointer">CHECK OUT NOW</button>
                </div>
        </div> 
            </div>
        
        
        </div>
       
    )
}

export default Cart
