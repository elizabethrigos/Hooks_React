import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUserState'
import HomeHooks from './playground/HomeHook' 
import HookUsenavigate from './playground/HookUseNavigate'   
import HookUseDebug from './playground/HookUseDebug'
import HookUseEffect from './playground/HookUseEffect'
import HookUseRef from './playground/HookUseRef'
import HookUseCallback from './playground/HookUseCallback'
import HookUseContext from './playground/HookUseContext'
import HookUseReducer from './playground/HookUseReducer'
import HookUseMemo from './playground/HookUseMemo'
import HookUseId from './playground/HookUseId'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks/>}></Route>
        <Route path='useState' element={<HookUseState/>}></Route>
        <Route path='useNavigate' element={<HookUsenavigate/>}></Route>
        <Route path='useDebug' element={<HookUseDebug/>}></Route>
        <Route path='useEffect' element={<HookUseEffect/>}></Route>
        <Route path='useRef' element={<HookUseRef/>}></Route>
        <Route path='useCallback' element={<HookUseCallback/>}></Route>
        <Route path='useContext' element={<HookUseContext/>}></Route>
        <Route path='useReducer' element={<HookUseReducer/>}></Route>
        <Route path='useMemo' element={<HookUseMemo/>}></Route>
        <Route path='useId' element={<HookUseId/>}></Route>

      </Routes>
    </BrowserRouter>
     
  )
}

export default App
