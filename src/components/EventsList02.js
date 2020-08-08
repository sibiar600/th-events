import React from 'react'

const EventsList = () => {
    return (
        <>
            <div className='h-auto flex justify-center bg-gray-100'>

                <div className='w-3/4'>
                    {/* header */}
                    <div className='flex md:justify-between sm:justify-center items-center mt-3 flex-wrap'>
                        <h1 className='text-3xl text-teal-500 font-serif leading-none ml-10'>Tokyo Events Calendar</h1>
                        <ul className='md:flex justify-center items-center md:mr-10'>
                            <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded mr-3'>By Price</button>
                            <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-300 font-bold px-6 py-3 rounded '>Month</button>
                        </ul>

                    </div>


                    {/* main container */}
                    <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center relative'>

                        {/* cards */}
                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/7582884598_b02823726b_o-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Citta’ Summer Event 2020: “Night Out</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Kawasaki’s La Cittadella shopping complex is holding its annual summertime event. This year’s theme is “Night Out”, where guests can join a chilled-out alfresco dining experience.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/kawasaki-la-cittadella-770x513.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Asakusa Toro Nagashi</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6  font-light text-justify text-sm md:h-40 sm:h-24'>An evening event in which candle-lit lanterns are floated down the Sumida River. Toro nagashi is a tradition in which lanterns lit with candles are set afloat on rivers to guide the spirits of the ancestors back to the other side during the O-bon holiday.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/minatomiraibon-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Minato Mirai Bon Dance Festival</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Join the yukata-clad masses in the annual bon dance tradition at Rinko Park—in the shade of the skyscrapers on the Yokohama port waterfront. If the dancing tires you out, there’s also a beer garden and beautiful views of the illuminated Yokohama Bay Bridge to keep you occupied.</div>
                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/7582884598_b02823726b_o-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Citta’ Summer Event 2020: “Night Out</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Kawasaki’s La Cittadella shopping complex is holding its annual summertime event. This year’s theme is “Night Out”, where guests can join a chilled-out alfresco dining experience.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/kawasaki-la-cittadella-770x513.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Asakusa Toro Nagashi</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6  font-light text-justify text-sm md:h-40 sm:h-24'>An evening event in which candle-lit lanterns are floated down the Sumida River. Toro nagashi is a tradition in which lanterns lit with candles are set afloat on rivers to guide the spirits of the ancestors back to the other side during the O-bon holiday.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/minatomiraibon-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Minato Mirai Bon Dance Festival</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Join the yukata-clad masses in the annual bon dance tradition at Rinko Park—in the shade of the skyscrapers on the Yokohama port waterfront. If the dancing tires you out, there’s also a beer garden and beautiful views of the illuminated Yokohama Bay Bridge to keep you occupied.</div>
                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/7582884598_b02823726b_o-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Citta’ Summer Event 2020: “Night Out</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Kawasaki’s La Cittadella shopping complex is holding its annual summertime event. This year’s theme is “Night Out”, where guests can join a chilled-out alfresco dining experience.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/kawasaki-la-cittadella-770x513.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Asakusa Toro Nagashi</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6  font-light text-justify text-sm md:h-40 sm:h-24'>An evening event in which candle-lit lanterns are floated down the Sumida River. Toro nagashi is a tradition in which lanterns lit with candles are set afloat on rivers to guide the spirits of the ancestors back to the other side during the O-bon holiday.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/minatomiraibon-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Minato Mirai Bon Dance Festival</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Join the yukata-clad masses in the annual bon dance tradition at Rinko Park—in the shade of the skyscrapers on the Yokohama port waterfront. If the dancing tires you out, there’s also a beer garden and beautiful views of the illuminated Yokohama Bay Bridge to keep you occupied.</div>
                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/7582884598_b02823726b_o-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Citta’ Summer Event 2020: “Night Out</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Kawasaki’s La Cittadella shopping complex is holding its annual summertime event. This year’s theme is “Night Out”, where guests can join a chilled-out alfresco dining experience.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/kawasaki-la-cittadella-770x513.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Asakusa Toro Nagashi</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6  font-light text-justify text-sm md:h-40 sm:h-24'>An evening event in which candle-lit lanterns are floated down the Sumida River. Toro nagashi is a tradition in which lanterns lit with candles are set afloat on rivers to guide the spirits of the ancestors back to the other side during the O-bon holiday.</div>

                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white p-4'>
                            <div className='px-6 py-4'>
                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/minatomiraibon-1280x600.jpg' alt=''></img>

                                <div className='flex flex-row justify-between mt-4 h-6'>
                                    <div className='font-bold text-sm text-gray-800 font-serif'>Minato Mirai Bon Dance Festival</div>
                                    <div className='font-bold text-sm text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Join the yukata-clad masses in the annual bon dance tradition at Rinko Park—in the shade of the skyscrapers on the Yokohama port waterfront. If the dancing tires you out, there’s also a beer garden and beautiful views of the illuminated Yokohama Bay Bridge to keep you occupied.</div>
                                <ul className='md:mt-10 sm:mt-0'>
                                    <li className='text-sm'>08:00 - 17:00</li>
                                    <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>




                    </div>

                </div>
            </div >

        </>
    )
}

export default EventsList
