import React, { useState, useEffect } from 'react'
import EventCard from '../molecules/EventCard'
import Search from '../atoms/Search'
import H1 from '../atoms/H1'
import Button from '../atoms/Button'

const EventsList = (props) => {

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/th-eventsapi.herokuapp.com/events`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <div className='md:w-3/4 sm:w-full mx-auto m-12'>
                <div className='flex md:justify-between mt-24 flex-wrap'>
                    <H1 h1={'Tokyo Events'} />
                    <div className='flex gap-2'>
                        <Button button={'Free'} />
                        <Search />
                    </div>

                </div>

                {isLoading ? <h1 className='text-2xl text-center'>Loading...</h1> : <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-2 relative'>
                    {events.map(event => (
                        <EventCard key={event.id} name={event.name} date={event.date} time={event.startHour} price={event.priceInYen} city={event.city} venue={event.venue} description={event.description} imagerectangle={event.imageURL} />
                    ))}
                </div>}
            </div>


        </>
    )
}

export default EventsList
