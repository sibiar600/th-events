import React from 'react'
import Card from './Card'

const EventsList = () => {
    return (
        <>
            <div className='h-auto flex justify-center bg-gray-100'>
                <div className='md:w-4/5 sm:w-full'>
                    {/* title */}
                    <div className='flex md:justify-between sm:justify-center items-center mt-12 flex-wrap'>
                        <h1 className='text-3xl text-teal-500 font-serif leading-none ml-10'>Tokyo Events Calendar</h1>
                        <ul className='md:flex justify-center items-center md:mr-10'>
                            <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded mr-3'>By Price</button>
                            <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded '>Month</button>
                        </ul>
                    </div>

                    {/* main container */}
                    <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center relative'>

                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card date='May 8' />
                        <Card />
                        <Card />

                    </div>

                </div>
            </div >

        </>
    )
}

export default EventsList
