import './App.css'

function App() {
function clickedFunc(data){
  console.log(data)
}
  return (
    <div className="widthHeight500"onWheel={(elem)=>{
    // console.log(elem)
    clickedFunc(elem.deltaY)
   }}>
   <button className="widthHeight">this is button</button>

   <input type="text" onChange={(data)=>{
    // console.log(data.target.value)
    clickedFunc(data)
   }} />
   </div>
  )
}

export default App
