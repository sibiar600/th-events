import React from 'react'
import ImageTall from '../atoms/ImageTall'
import H3 from '../atoms/H3'
import Subtitle from '../atoms/Subtitle'

const LocalCard = ({ image, h3, subtitle }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center py-2'>
                <div className='pb-2'>
                    <ImageTall image={image} />
                </div>
                <div className='py-1'>
                    <H3 h3={h3} />
                </div>
                <div>
                    <Subtitle subtitle={subtitle} />
                </div>
            </div>

        </>
    )
}

export default LocalCard
