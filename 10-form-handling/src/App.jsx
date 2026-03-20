
import { useState } from 'react'
import './App.css'

// function App() {

  // teo way binding 
// const [title, setTitle ] = useState('Dilnayab')
// const submitForm = (e)=>{
//   e.preventDefault()
// console.log('form submitted', title)
// }
  // return (
    // two way binding 
    // <>
    //  <form onSubmit={(e)=>{
    //   submitForm(e)}}>
    //   <input type="text" placeholder='Enter name' value={title} onChange={(e)=>{
    //     console.log(e.target.value)
    //     setTitle(e.target.value)
        
    //   }}/>
    //   <button>Submit</button>
    //  </form>
    // </>
  // )
// }


function App() {
  const [formValue, setFormValue] = useState({heading:'',details:''})
  const [notes, setNotes] = useState([])

  function inptChanges(e, type){
    const tempForm = {...formValue}
    tempForm[type] = e.target.value
    setFormValue(tempForm)
    console.log(e.target.value)
    
  }

  function addNotes(note){
    const tempNotes = [...notes]
    tempNotes.push(note)
    setNotes(tempNotes)
    setFormValue({heading:'',details:''})
    console.log(notes)

  }

  function deleteNotes(index){
    const updatesNotes = [...notes]
    updatesNotes.splice(index,1)
    setNotes(updatesNotes)


  }


  function formSubmit(e){
    e.preventDefault()
    console.log(formValue)
    addNotes(formValue)

  }

  return (
    <div className='h-screen bg-black lg:flex text-white'>
  
  <form className="flex flex-col gap-4 p-10 items-start lg:w-1/2" onSubmit={(e)=>{
    formSubmit(e)
  }}>
  <h1 className="text-3xl font-bold">Add Notes</h1>
  <input onChange={(e)=>{
    inptChanges(e, 'heading')
  }} type="text"
   className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
   placeholder='Enter note heading'
   value={formValue.heading} />
  <textarea onChange={(e)=>{
    inptChanges(e,'details')
  }} type="text"
  className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
  placeholder='write details'
  value={formValue.details} 
  ></textarea>

  <button className="w-full font-medium text-black bg-white rounded px-5 py-2">Submit</button>
  </form>
  <div className='lg:w-1/2 lg:border-l-2 p-10'>
  <h1 className="text-3xl font-bold">Your Notes</h1>
  <div className="h-full flex flex-wrap gap-5 overflow-auto">
    {notes.map((note, ind)=>(
      <div key={ind}>
        <div className="w-40 h-52 rounded bg-white flex flex-col text-black gap-4 p-2">
      <div className='flex justify-between'>
        <h1>{note?.heading}</h1>
     <button type="button"
     className='cursor-pointer rounded-full w-5 h-5 flex items-center justify-center pb-1  bg-black text-white'
     onClick={(ind)=>{
      deleteNotes(ind)
     }}
     >x</button>
      </div>
      <p>
        {note?.details}
      </p>
    </div>
        
      </div>

    ))}
    
  </div>
  </div>
    </div>

  )
}

export default App
