import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUserState'
import HomeHooks from './playground/HomeHook' 
import HookUsenavigate from './playground/HookUseNavigate'   
import HookUseDebug from './playground/HookUseDebug'
import HookUseContext from './playground/HookUseContext'
import HookUseReducer from './playground/HookUseReducer'
import HookUseMemo from './playground/HookUseMemo'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks/>}></Route>
        <Route path='useState' element={<HookUseState/>}></Route>
        <Route path='useNavigate' element={<HookUsenavigate/>}></Route>
        <Route path='useDebug' element={<HookUseDebug/>}></Route>
        <Route path='useContext' element={<HookUseContext/>}></Route>
        <Route path='useReducer' element={<HookUseReducer/>}></Route>
        <Route path='useMemo' element={<HookUseMemo/>}></Route>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
