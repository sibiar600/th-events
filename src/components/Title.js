import React from 'react'
import Search from './Search'

const Title = () => {
    return (
        <>
            <div className='flex md:justify-between mt-24 flex-wrap'>
                <h1 className='text-3xl text-teal-500 font-serif leading-none ml-10'>Tokyo Events Calendar</h1>
                <Search />
            </div>
        </>
    )
}

export default Title
