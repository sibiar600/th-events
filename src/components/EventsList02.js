import React, { useState, useEffect } from 'react'
import Card from './Card'
import Title from './Title'

const EventsList = () => {

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/th-eventsapi.herokuapp.com/events`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            <div className='h-auto flex justify-center bg-gray-100'>
                <div className='md:w-4/5 sm:w-full'>
                    <Title />

                    {isLoading ? <h1 className='text-5xl'>Loading...</h1> : <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center relative'>
                        {events.map(event => (
                            <Card key={event.id} name={event.name} date={event.startDate} startHour={event.startHour} endHour={event.endHour} price={event.priceInYen} city={event.city} venue={event.venue} description={event.description} image={event.imageURL} />
                        ))}
                    </div>}
                </div>
            </div >

        </>
    )
}

export default EventsList
