
import { useState } from 'react'
import './App.css'

function App() {


  // const [num, setNum] = useState({user:'dil',age:25});
  const [num, setNum] = useState([10,20,30]); // array methode

  function buttonClicked(){
  
    // setNum(num+1);
    // setNum(num+1);
    // setNum(num+1);

    // setNum(data =>data+1 )
    // setNum(data =>data+1 )
    // setNum(data =>data+1 )

    // setNum({...num, age:30}) // one method


    // second method
    // const tempData = {...num}; 
    // tempData.age = 28
    // tempData.user = 'nayab'
    // setNum(tempData)

    // third Method 

    // setNum(prev=>({...prev, age: 31})) 

    // array method 

    const tempArray = [...num]

    tempArray.push(100)

    setNum(tempArray)

    
    console.log(num)
  }


  
  return (
    <div>
      <div>{num}</div>
      <button  onClick={buttonClicked}>Click me</button>
    </div>
  )
}

export default App
