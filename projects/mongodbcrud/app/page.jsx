import React from 'react'
import EventsList from './compoents/EventsList'

export default function Home() {
  return (
    <div className='text-2xl text-indigo-700 dark:text-teal-500 px-8 py-3'>
      <EventsList />
    </div>
  )
}
