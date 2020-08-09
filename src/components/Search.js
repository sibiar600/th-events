import React from 'react'

const Search = () => {
    return (
        <div>
            <ul className='md:flex justify-center items-center md:mr-10'>
                <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded mr-3 text-teal-500 hover:bg-teal-700 hover:text-white'>Free</button>
                <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded w-64 text-left'>Search</button>
            </ul>
        </div>
    )
}

export default Search
