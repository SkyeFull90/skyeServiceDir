'use client';

import React from 'react'
import { HiOutlineTrash }   from 'react-icons/hi';
import { useRouter } from 'next/navigation';

export default function RmvBtn({ id }) {
  const router = useRouter();
  const removeTopic = async() =>{
    const confirmed = confirm("Are you sure? This action is non-reversable.");

    if (confirmed) {
     const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <>
        <button onClick={removeTopic} className='btn btn-outline btn-error'>
            <HiOutlineTrash size={24} />
        </button>
    </>
    
  
  )
}
