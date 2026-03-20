import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [numA, setNumA] = useState(0)
const [numB, setNumB] = useState(0)

  useEffect(()=>{
    console.log('A Effect callled')
  },[numA, numB])

  useEffect(()=>{
    console.log('b change Effect')
  }, [numB])

   function numChange(){
    setNumA(numA+1)

  }

  function numChangeB(){
    setNumB(numB+10)
  }
  return (
    <div style={{display: 'flex', flexDirection:'column', gap: '10px'}}>
   <button className='buttonClass' onClick={()=>{
    numChange()
   }} >Button A {numA}</button>
   <button onClick={numChangeB} className='buttonClass'>Button B {numB}</button>
   </div>
  )
}

export default App
