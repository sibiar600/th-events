import React from 'react'
import ImageWide from '../atoms/ImageWide'
import WhiteTitle from '../atoms/WhiteTitle'

const NeighborhoodCard = ({ whitetitle, imagewide }) => {
    return (
        <>
            <div>
                <div>
                    <WhiteTitle whitetitle={whitetitle} />
                </div>
                <div>
                    <ImageWide imagewide={imagewide} />
                </div>
            </div>


        </>
    )
}

export default NeighborhoodCard
