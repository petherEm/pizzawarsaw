import React from 'react'
import Image from 'next/image'

const Order = () => {
    return (
        <div className="flex items-center justify-center">

             <div className="lg:w-[60%] lg:p-32 p-4 lg:flex flex-col justify-between">
                <div className="text-center">
                    <table className="flex-col">
                        <tr >
                            <th className="lg:px-6">Order ID</th>
                            <th className="lg:px-6">Customer</th>
                            <th className="lg:px-6">Address</th>
                            <th className="lg:px-6">Total</th>
                        </tr>
                        <tr>
                            <td>
                                4038423255521
                            </td>
                            <td>
                                John Doe
                            </td>
                            <td>
                                <span>Wiejska 10/12a</span>
                            </td>
                            <td>
                                <span>72 PLN</span>
                            </td>
                        </tr>
                    </table>
                </div>


                <div className="bg-fuchsia-300 p-6 shadow-lg">
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
                            <button className="bg-gray-200 text-green-700 font-semibold py-4 px-8 mt-4 rounded-lg cursor-pointer">PAID</button>
                        </div>
                </div> 
            </div>
        
        
        </div>
    )
}

export default Order
