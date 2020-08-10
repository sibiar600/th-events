import React from 'react'
import ImageSquare from '../atoms/ImageSquare'
import StoryTag from '../atoms/StoryTag'
import H3 from '../atoms/H3'

const StoryCard = ({ storytag, h3, imagesquare }) => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='card rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white'>
                    <div className='flex flex-wrap justify-center'>
                        <ImageSquare imagesquare={imagesquare} />

                        <a href='/' className='flex flex-col mt-2'>
                            <>
                                <StoryTag storytag={storytag} />
                            </>
                            <>
                                <H3 h3={h3} />
                            </>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StoryCard
