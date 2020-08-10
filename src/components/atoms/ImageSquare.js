import React from 'react'

const ImageSquare = ({ imagesquare }) => {
    return (
        <>
            <div>
                <img className='w-full h-64 object-cover rounded-lg hover:shadow-2xl' src={imagesquare} alt="" />
            </div>
        </>
    )
}

export default ImageSquare
