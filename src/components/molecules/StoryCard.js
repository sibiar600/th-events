import React from 'react'
import ImageSquare from '../atoms/ImageSquare'
import StoryTag from '../atoms/StoryTag'
import H3 from '../atoms/H3'

const StoryCard = ({ storytag, h3, imagesquare }) => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='card rounded-lg '>

                    <div className='flex flex-col justify-center'>
                        <div className='hover:shadow-2xl'>
                            <ImageSquare imagesquare={imagesquare} />
                        </div>

                        <div className='flex flex-col'>
                            <div className='pt-2'>
                                <StoryTag storytag={storytag} />
                            </div>
                            <div>
                                <H3 h3={h3} />
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default StoryCard
