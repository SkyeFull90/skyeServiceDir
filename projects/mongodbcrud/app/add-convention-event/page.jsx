"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Tiltle and description are required.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "appilcation/json"
        },
        body: JSON.stringify({title, description}),
      })

      if (res.ok) {
        router.push('/')
      }else{
        throw new error('Falied to create new topic')
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='border border-slate-500 px-8 py-2' type="text" placeholder='Convention Title'/>
        <input 
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className='border border-slate-500 px-8 py-2' type="text" placeholder='Convention description'/>
        <button type='submit' className='btn btn-success py-3 font-bold px-6 w-fit lg:w-80'>Add Convention</button>
    </form>
  )
}
