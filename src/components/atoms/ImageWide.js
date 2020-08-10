import React from 'react'

const ImageWide = ({ imagewide }) => {
    return (
        <>
            <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src={imagewide} alt=''></img>
            </div>
        </>
    )
}

export default ImageWide
