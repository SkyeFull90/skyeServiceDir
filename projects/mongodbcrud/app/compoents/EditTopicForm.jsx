import React from 'react'

export default function EditTopicForm() {
  return (
    <div>
      <form className='flex flex-col gap-3'>
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Convention Title'/>
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Convention description'/>
        <button className='btn btn-success py-3 font-bold px-6 w-fit lg:w-80'>Update Convention</button>
      </form>
    </div>
  )
}
