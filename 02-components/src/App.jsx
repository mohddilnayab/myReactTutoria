
import './App.css'
import Card from './components/card'

function App() {
 

  return (

    <div className='parent'>
       <Card name="vivek" age={30} url="https://images.unsplash.com/photo-1770646636571-2783a9b576e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       <Card name="Dil" age={25} url="https://images.unsplash.com/photo-1772442088626-575e0f517315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D"/>
       <Card name="Nayab" age={26} url="https://images.unsplash.com/photo-1772442198620-3674b427e59e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"/>
       <Card name="Mohd" age={27} url="https://images.unsplash.com/photo-1772955428368-26b4e94d11a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    
   
    
  )
}

export default App
