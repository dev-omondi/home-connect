
import React from 'react'
import { Button } from './components/ui/button'
import Layout from './Layouts/Layout'
import Homepage from './pages/Homepage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/Loginpage'
import{Route,Routes} from "react-router-dom"
import Protectpage from './pages/Protectpage'
import Profilepage from './pages/Profilepage'
const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/register' element={<Registerpage/>}/>
          <Route element={<Protectpage/>}>
            <Route path='/profile' element={<Profilepage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App