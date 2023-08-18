import React from 'react'
import RmvBtn from './RmvBtn'
import Link from 'next/link'
import { HiPencilAlt }   from "react-icons/hi"

const getTopics = async()=>{
  try {
  const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store'
    })

    if(!res.ok){
      throw new error("Failed to fetch events");
    }

    return res.json();
  } catch (error) {
    console.log("Error laoding events", error)
  }
}

export default async function EventsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map(ev => (
         <main className='card  w-full bg-base-100 border-2 border-slate-800 shadow-xl dark:bg-emerald-800 dark:shadow-cyan-500/70 p-4'>
            <section>
                <h2 className='card-title font-bold text-2xl text-primary dark:text-white'>{ev.title}</h2>
                <p>{ev.description}</p>
            </section>
            <section className='card-actions justify-end gap-2'>
                <RmvBtn/>
                <button className='btn btn-outline btn-info'>
                     <Link href={`/edit-convention/${ev._id}`} >
                        <HiPencilAlt size={24}/>
                     </Link>
                </button>            
            </section>
        </main>
      ))}       
    </>
  )
}
