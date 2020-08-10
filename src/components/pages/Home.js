import React from 'react'
import NeighborhoodCard from '../molecules/NeighborhoodCard'
import H1 from '../atoms/H1'
import LocalCard from '../molecules/LocalCard'
import StoryCard from '../molecules/StoryCard'

const Home = () => {
    return (
        <>
            <div className='md:w-3/4 sm:w-full mx-auto'>
                <div className='mt-12 p-6'>
                    <H1 h1={'Stories'} />
                    <div className='mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                        <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2020/04/pnkwgh.jpg'} storytag={'Film & TV'} h3={'Tokyo: Lost in Translation'} />
                        <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2018/10/516-nagakin-capsule-tower-jp.jpg'} storytag={'architecture'} h3={'Tokyo`s Brutalist Architecture'} />
                        <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/07/sctp0142-cherry-blossom-tokyo-japan-chidorigafuchi-quiapo00021-2.jpg'} storytag={'see & do'} h3={'Most Instagrammable Spots in Tokyo'} />
                        <StoryCard imagesquare={'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/09/7.jpg'} storytag={'art'} h3={'Tokyo Drift: Shiori Fujioka’s Dreamy Sketches Show a Calmer Side of Tokyo'} />
                    </div>
                </div>

                <div className='mt-12 p-6'>
                    <H1 h1={'Neighborhoods'} />
                    <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
                        <NeighborhoodCard whitetitle={'Kichijoji'} imagewide={'https://source.unsplash.com/layMbSJ3YOE'} />
                        <NeighborhoodCard whitetitle={'Nakano'} imagewide={'https://source.unsplash.com/hwLAI5lRhdM'} />
                        <NeighborhoodCard whitetitle={'Shin-Ogikubo'} imagewide={'https://source.unsplash.com/02kTeRPbndQ'} />
                        <NeighborhoodCard whitetitle={'Nishi-Ogikubo'} imagewide={'https://source.unsplash.com/khQY5Eu-aa0'} />
                        <NeighborhoodCard whitetitle={'Mitaka'} imagewide={'https://source.unsplash.com/c8ioq1LH_mI'} />
                        <NeighborhoodCard whitetitle={'Asagaya'} imagewide={'https://source.unsplash.com/WyuxUIyEP4A'} />
                    </div>
                </div>

                <div className='mt-12 p-6'>
                    <H1 h1={'Locals'} />
                    <div className='mt-6 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
                        <LocalCard imagetall={'https://source.unsplash.com/wJ-yzQDAMXs/900x1600'} h3='Yuru,36' subtitle='Student' />
                        <LocalCard imagetall={'https://source.unsplash.com/nF8YIvklCKk/900x1600'} h3='Nozomi, 42' subtitle='Accountant' />
                        <LocalCard imagetall={'https://source.unsplash.com/ySQbhCdm6YE/900x1600'} h3='Yu, 32' subtitle='Travel Blogger' />
                        <LocalCard imagetall={'https://source.unsplash.com/O9Lw87Nbbog/900x1600'} h3='Suzu,36' subtitle='Model' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
