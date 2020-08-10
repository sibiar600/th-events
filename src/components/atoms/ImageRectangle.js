import React from 'react'

const ImageRectangle = ({ imagerectangle }) => {
    return (
        <>
            <div>
                <img className='w-full h-48 object-cover rounded-lg' src={imagerectangle} alt="" />
            </div>

        </>
    )
}

export default ImageRectangle
