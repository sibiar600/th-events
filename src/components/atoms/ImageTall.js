import React from 'react'

const ImageTall = ({ image }) => {
    return (
        <>
            <div>
                <img className='w-48 h-2xl object-cover rounded-lg transform transition hover:scale-110 hover:shadow-xl' src={image} alt="" />
            </div>

        </>
    )
}

export default ImageTall
