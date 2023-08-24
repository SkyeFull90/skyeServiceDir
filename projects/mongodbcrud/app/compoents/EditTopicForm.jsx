"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),    
      });

      if (!res.ok) {
        throw new Error("Failed to update topic")
      }

      router.refresh();
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className='border border-slate-500 px-8 py-2' type="text" placeholder='Convention Title'/>
        <input 
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className='border border-slate-500 px-8 py-2' type="text" placeholder='Convention description'/>
        <button className='btn btn-success py-3 font-bold px-6 w-fit lg:w-80'>Update Convention</button>
      </form>
    </div>
  )
}