import React from 'react'

const ImageSquare = ({ imagesquare }) => {
    return (
        <>
            <div>
                <img className='w-full h-48 object-cover rounded-lg transform transition hover:scale-110 hover:shadow-xl' src={imagesquare} alt="" />
            </div>
        </>
    )
}

export default ImageSquare
