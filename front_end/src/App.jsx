
import React from 'react'
import { Button } from './components/ui/button'
import Layout from './Layouts/Layout'
import Homepage from './pages/Homepage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/Loginpage'
import{Route,Routes} from "react-router-dom"
const App = () => {
  return (
    <div className='mt-30'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/register' element={<Registerpage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App