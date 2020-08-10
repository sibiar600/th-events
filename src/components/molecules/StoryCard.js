import React from 'react'
import ImageSquare from '../atoms/ImageSquare'
import StoryTag from '../atoms/StoryTag'
import H3 from '../atoms/H3'

const StoryCard = ({ storytag, h3, imagesquare }) => {
    return (
        <>
            <div>
                <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white md:p-4 sm:p-0'>
                    <div className='px-2 py-2'>
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
