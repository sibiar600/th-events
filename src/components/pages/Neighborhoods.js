import React from 'react'
import NeighborhoodList from '../organisms/NeighborhoodList'
import H1 from '../atoms/H1'


const Neighborhoods = ({ h2 }) => {
    return (
        <>
            <div className='md:w-3/4 sm:w-full mx-auto m-12'>
                <H1 h1={'Neighborhoods'} />
            </div>
            <NeighborhoodList h2={'West Tokyo'} />
            <NeighborhoodList h2={'East Tokyo'} />
            <NeighborhoodList h2={'Central Tokyo'} />
            <NeighborhoodList h2={'North Tokyo'} />
            <NeighborhoodList h2={'South Tokyo'} />
            <NeighborhoodList h2={'Yokohama/Kanagawa'} />
            <NeighborhoodList h2={'Chiba'} />
            <NeighborhoodList h2={'Saitama'} />
        </>
    )
}

export default Neighborhoods
