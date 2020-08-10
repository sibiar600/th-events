import React from 'react'
import H2 from '../atoms/H2'
import NeighborhoodCard from '../molecules/NeighborhoodCard'

const EventsList = ({ h1, h2, imagewide, whitetitle }) => {

    return (
        <>
            <div className='md:w-3/4 sm:w-full mx-auto m-12'>

                <H2 h2={h2} />

                <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center relative mx-10'>
                    <NeighborhoodCard whitetitle={'Kichijoji'} imagewide={'https://source.unsplash.com/layMbSJ3YOE'} />
                    <NeighborhoodCard whitetitle={'Nakano'} imagewide={'https://source.unsplash.com/hwLAI5lRhdM'} />
                    <NeighborhoodCard whitetitle={'Shin-Ogikubo'} imagewide={'https://source.unsplash.com/02kTeRPbndQ'} />
                    <NeighborhoodCard whitetitle={'Nishi-Ogikubo'} imagewide={'https://source.unsplash.com/khQY5Eu-aa0'} />
                    <NeighborhoodCard whitetitle={'Mitaka'} imagewide={'https://source.unsplash.com/c8ioq1LH_mI'} />
                    <NeighborhoodCard whitetitle={'Asagaya'} imagewide={'https://source.unsplash.com/WyuxUIyEP4A'} />
                    <NeighborhoodCard whitetitle={'Koenji'} imagewide={'https://source.unsplash.com/GsSHHOA0RLY'} />
                    <NeighborhoodCard whitetitle={'Shimokitazawa'} imagewide={'https://source.unsplash.com/3wciQ0Mg59Y'} />
                    <NeighborhoodCard whitetitle={'Musashino'} imagewide={'https://source.unsplash.com/CsMNgdHXzFs'} />
                    <NeighborhoodCard whitetitle={'Shinjuku'} imagewide={'https://source.unsplash.com/k2cmXS5ktp4'} />
                    <NeighborhoodCard whitetitle={'Nakameguro'} imagewide={'https://source.unsplash.com/5MerlCpd0aM'} />
                    <NeighborhoodCard whitetitle={'Asakusa'} imagewide={'https://source.unsplash.com/DpPutJwgyW8'} />
                    <NeighborhoodCard whitetitle={'Yoyogi'} imagewide={'https://source.unsplash.com/3wciQ0Mg59Y'} />
                    <NeighborhoodCard whitetitle={'Sasazuka'} imagewide={'https://source.unsplash.com/CsMNgdHXzFs'} />
                    <NeighborhoodCard whitetitle={'Hatagaya'} imagewide={'https://source.unsplash.com/k2cmXS5ktp4'} />
                </div>
            </div>

        </>
    )
}

export default EventsList
