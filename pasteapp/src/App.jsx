 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import './App.css'

const router = createBrowserRouter([
    {
      path : "/",
      element : 
      <div className='flex flex-col justify-center items-center gap-4'>
        <Navbar />
        <Home />
      </div>
     
    },
    {
      path : "/pastes",
      element : 
      <div >
        <Navbar />
         <Paste />
      </div>
      
    },
    {
      path : "/paste/:id",
      element :
      <div>
        <Navbar />
        <ViewPaste />
      </div>
      
    }



])

function App() {
   

  return (
    
      <div>
       <RouterProvider router = {router} />
      </div>
  )
}

export default App
