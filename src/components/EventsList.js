import React, { useState, useEffect } from 'react'
import Card from './Card'
import Title from './Title'
import Search from './Search'

const EventsList = () => {

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')

    useEffect(() => {
        // fetch(`https://cors-anywhere.herokuapp.com/th-eventsapi.herokuapp.com/events`)
        fetch(`https://spreadsheets.google.com/feeds/cells/1M8DCqwbIZS44P_y6LJZUd1clRkWVNp5Kl86HD826QCU/1/public/full?alt=json`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [term])


    return (
        <>
            <div className='h-auto flex justify-center bg-gray-100'>
                <div className='md:w-3/4 sm:w-full'>
                    <div className='flex md:justify-between mt-24 flex-wrap'>
                        <Title title={'TokyoHoods Events'} />
                        <Search searchText={(text) => setTerm(text)} />
                    </div>


                    {isLoading ? <h1 className='text-2xl text-center'>Loading...</h1> : <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center relative'>
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
