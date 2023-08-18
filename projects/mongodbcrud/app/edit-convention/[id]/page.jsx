import EditTopicForm from '@/app/compoents/EditTopicForm'
import React from 'react'

const getTopciById = async(id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new error("Failed to fetch topic")
    }

    return res.json();
  } catch (error) {
    console.error(error)
  }
}

export default async function EditTopic({ params }) {
  const {id} = params;
  const { topic } = await getTopciById(id);
  const { title, description } = topic;
  
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description}/>
    </div>
  )
}
