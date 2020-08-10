import React from 'react'
import Title from './Title'

const ImageTall = ({ imageURL, title }) => {
    return (
        <>
            <div>
                <img className='w-48 h-64 object-cover rounded-lg' src={imageURL} alt="" />
                <Title title={title} />
            </div>

        </>
    )
}

export default ImageTall
