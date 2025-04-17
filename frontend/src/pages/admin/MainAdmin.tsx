import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { serverUrl } from '../../api/config';

const MainAdmin = () => {
    const [fruits, setFruits] = useState([]);

    // Fetch data from API
    const fetchFruits = async () => {
        try {
            const response = await axios.get(`${serverUrl}/fruits`);
            setFruits(response.data); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFruits();
    },[])

    return (
        <div className='pl-7'>
            <div className=' flex justify-between m-2 items-center'>
            <div className='font-bold text-2xl mb-5'>
                Fruits List
            </div>
            <div className='p-2 bg-blue-400 rounded-lg cursor-pointer hover:bg-blue-500'> Add New Fruit</div>
            </div>
            
            <div className='overflow-x-auto'>
                <table className='border w-full'>
                    <thead>
                        <tr className='border items-center p-2'>
                            {/* Dynamically render table headers based on the keys of the first fruit */}
                            {Object.keys(fruits[0] || {}).map((key) => (
                                <th key={key} className="border p-2">{key}</th>
                            ))}
                            <th className="border p-2">Actions</th> {/* Column for Edit/Delete buttons */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Iterate over each fruit and display its values */}
                        {fruits.map((fruit, index) => (
                            <tr key={index} className='border items-center p-2'>
                                {Object.values(fruit).map((value, idx) => (
                                    <td key={idx} className="border p-2">{value}</td>
                                ))}
                                <td className="border p-2">
                                    <button className='bg-green-400 p-2 rounded-lg'>Edit</button>&nbsp;
                                    <button className='bg-red-400 p-2 rounded-lg'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainAdmin;
