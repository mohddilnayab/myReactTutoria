import { useState } from 'react'

import './App.css'

function App() {
 const [count, setCount] = useState(0)

 function IncreaseCount(){
  setCount(count +1)
 }

 function DecreaseCount(){
  setCount(count-1)
 }

  return (
    <>
    
      <h1>Counter</h1>
      <div className="card">
        <button className='countBtn'>
          Count is {count}
        </button>
      </div>
      <div className="buttonContainer">
       <button className="buttonCo" onClick={IncreaseCount}>Increase</button>
       <button className="buttonCo" onClick={DecreaseCount}>Decrease</button>
      </div>
    </>
  )
}

export default App
