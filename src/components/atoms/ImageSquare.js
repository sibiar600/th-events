import React from 'react'

const ImageSquare = ({ imagesquare }) => {
    return (
        <>
            <div>
                <img className='w-auto h-64 object-cover rounded-lg' src={imagesquare} alt="" />
            </div>
        </>
    )
}

export default ImageSquare
