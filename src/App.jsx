import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUserState'
import HomeHooks from './playground/HomeHook' 
import HookUsenavigate from './playground/HookUseNavigate'   
import HookUseDebug from './playground/HookUseDebug'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks/>}></Route>
        <Route path='useState' element={<HookUseState/>}></Route>
        <Route path='useNavigate' element={<HookUsenavigate/>}></Route>
        <Route path='useDebug' element={<HookUseDebug/>}></Route>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
