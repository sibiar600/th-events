import React from 'react'

const ImageTall = ({ imagetall }) => {
    return (
        <>
            <div>
                <img className='w-auto h-xl object-cover rounded-lg transform transition hover:scale-110 hover:shadow-xl' src={imagetall} alt="" />
            </div>

        </>
    )
}

export default ImageTall
