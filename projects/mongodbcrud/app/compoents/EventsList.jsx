import React from 'react'
import RmvBtn from './RmvBtn'
import Link from 'next/link'
import { HiPencilAlt }   from "react-icons/hi"

export default function EventsList() {
  return (
    <>
        <main className='card  w-96 bg-base-100 border-2 border-slate-800 shadow-xl dark:bg-emerald-800 dark:shadow-cyan-500/70 p-4'>
            <section>
                <h2 className='card-title font-bold text-2xl text-primary dark:text-white'>Event Title</h2>
                <p>Description</p>
            </section>
            <section className='card-actions justify-end gap-2'>
                <RmvBtn/>
                <Link href={'#'} className='btn btn-outline btn-info'>
                    <HiPencilAlt size={24}/>
                </Link>
            </section>
        </main>
    </>
  )
}
