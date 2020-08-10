import React from 'react'
import StoryCard from '../molecules/StoryCard'
import H1 from '../atoms/H1'

const StoryList = ({ storytag, h3, imagesquare }) => {
    return (
        <>
            <div className='md:w-3/4 sm:w-full mx-auto m-12 p-2'>
                <H1 h1={'Stories from the Hood'} />
                <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 gap-2 justify-center'>
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2020/04/pnkwgh.jpg'} storytag={'Film & TV'} h3={'Tokyo: Lost in Translation'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2018/10/516-nagakin-capsule-tower-jp.jpg'} storytag={'architecture'} h3={'Tokyo`s Brutalist Architecture'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/07/sctp0142-cherry-blossom-tokyo-japan-chidorigafuchi-quiapo00021-2.jpg'} storytag={'see & do'} h3={'Most Instagrammable Spots in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/09/7.jpg'} storytag={'art'} h3={'Tokyo Drift: Shiori Fujioka’s Dreamy Sketches Show a Calmer Side of Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/10/m69rdd-1.jpg'} storytag={'guides & tips'} h3={'The Ultimate Tokyo Bucket List'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2016/10/photo-1461783818807-74d54914743e.jpg'} storytag={'tech'} h3={'Best Apps for Navigating Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2016/10/20252067818_8dbbe8eaf6_b.jpg'} storytag={'art'} h3={'Best Museums in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2018/10/pc4xxd.jpg'} storytag={'places to stay'} h3={'The 10 Best Airbnbs in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2020/04/pnkwgh.jpg'} storytag={'Film & TV'} h3={'Tokyo: Lost in Translation'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2018/10/516-nagakin-capsule-tower-jp.jpg'} storytag={'architecture'} h3={'Tokyo`s Brutalist Architecture'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/07/sctp0142-cherry-blossom-tokyo-japan-chidorigafuchi-quiapo00021-2.jpg'} storytag={'see & do'} h3={'Most Instagrammable Spots in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/09/7.jpg'} storytag={'art'} h3={'Tokyo Drift: Shiori Fujioka’s Dreamy Sketches Show a Calmer Side of Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/10/m69rdd-1.jpg'} storytag={'guides & tips'} h3={'The Ultimate Tokyo Bucket List'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2016/10/photo-1461783818807-74d54914743e.jpg'} storytag={'tech'} h3={'Best Apps for Navigating Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2016/10/20252067818_8dbbe8eaf6_b.jpg'} storytag={'art'} h3={'Best Museums in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2018/10/pc4xxd.jpg'} storytag={'places to stay'} h3={'The 10 Best Airbnbs in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2020/04/pnkwgh.jpg'} storytag={'Film & TV'} h3={'Tokyo: Lost in Translation'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2018/10/516-nagakin-capsule-tower-jp.jpg'} storytag={'architecture'} h3={'Tokyo`s Brutalist Architecture'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/07/sctp0142-cherry-blossom-tokyo-japan-chidorigafuchi-quiapo00021-2.jpg'} storytag={'see & do'} h3={'Most Instagrammable Spots in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/09/7.jpg'} storytag={'art'} h3={'Tokyo Drift: Shiori Fujioka’s Dreamy Sketches Show a Calmer Side of Tokyo'} />

                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/10/m69rdd-1.jpg'} storytag={'guides & tips'} h3={'The Ultimate Tokyo Bucket List'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2016/10/photo-1461783818807-74d54914743e.jpg'} storytag={'tech'} h3={'Best Apps for Navigating Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2016/10/20252067818_8dbbe8eaf6_b.jpg'} storytag={'art'} h3={'Best Museums in Tokyo'} />
                    <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2018/10/pc4xxd.jpg'} storytag={'places to stay'} h3={'The 10 Best Airbnbs in Tokyo'} />



                </div>
            </div>
        </>
    )
}

export default StoryList
