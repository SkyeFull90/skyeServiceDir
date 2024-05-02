import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>
        <section>
           <h1 className='m-6'>Farm Stack</h1>
           <h2 className='mb-6'>Hello World!</h2>
        </section>
        <div className='m-10'>
            <input type="text" placeholder='title'/>
            <input type="text" placeholder='description'/>
            <button value="Submit" className='btn'>Add task</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Edit Todo</th>
                <th>Delete Todo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Title</th>
                <td>Description</td>
                <td><button type="submit" className='btn btn-warning'>Edit</button></td>
                <td><button type="submit" className='btn btn-error'>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
