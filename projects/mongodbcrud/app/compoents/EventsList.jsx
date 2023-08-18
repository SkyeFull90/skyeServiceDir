import React from 'react'
import RmvBtn from './RmvBtn'
import Link from 'next/link'
import {HiPencilAlt} from "react-icons/hi"
import connectMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";

const getTopics = async()=>{
  try {
    await connectMongodb();
    return await Topic.find();
  } catch (error) {
    console.log("Error loading events", error)
  }
}

export default async function EventsList() {
  const  topic = await getTopics();


  return (
    <div className='grid  gap-4'>
      {topic.map(ev => (
         <main className='card  w-full bg-base-100 border-2 border-slate-800 shadow-xl dark:bg-emerald-800 dark:shadow-cyan-500/70 p-4'>
            <section>
                <h2 className='card-title font-bold text-2xl text-primary dark:text-white'>{ev.title}</h2>
                <p>{ev.description}</p>
            </section>
            <section className='card-actions justify-end gap-2'>
                <RmvBtn id={ev._id}/>
                <button className='btn btn-outline btn-info'>
                     <Link href={`/edit-convention/${ev._id}`} >
                        <HiPencilAlt size={24}/>
                     </Link>
                </button>            
            </section>
        </main>
      ))}
    </div>
  )
}

