import React, { useState } from 'react'

const Search = ({ searchText }) => {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text)

    }

    return (
        <>
            <form onSubmit={onSubmit} className='mr-10'>
                <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded mr-3 text-teal-500 hover:bg-teal-500 hover:text-white focus:outline-none'>Free</button>
                <input onChange={e => setText(e.target.value)} className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded w-64 text-left focus:outline-none' type='text' placeholder='Search' />
            </form>
        </>
    )
}

export default Search
