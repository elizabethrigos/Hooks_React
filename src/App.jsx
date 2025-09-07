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
import HookUseOptimistic from './playground/HookUseOptimistic'
import HookUseLayoutEffect from './playground/HookUseLayoutEffect'
import HookUseTransition from './playground/HookUseTransition'
import HookUseActionState from './playground/HookUseActionState'
import HookUseSyncExternalStore from './playground/HookUseSyncExternalStore'
import HookUseImperativeHandle from './playground/HookUseImperativeHandle'
import HookUseInsertionEffect from './playground/HookUseInsertionEffect'
import HookUseUse from './playground/HookUseUse'
import HookUseDeferredValue from './playground/HookUseDeferredValue'

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
        <Route path='useOptimistic' element={<HookUseOptimistic/>}></Route>
        <Route path='useLayoutEffect' element={<HookUseLayoutEffect/>}></Route>
        <Route path='useTransition' element={<HookUseTransition/>}></Route>
        <Route path='useActionState' element={<HookUseActionState/>}></Route>
        <Route path='useSyncExternalStore' element={<HookUseSyncExternalStore/>}></Route>
        <Route path='useImperativeHandle' element={<HookUseImperativeHandle/>}></Route>
        <Route path='useInsertionEffect' element={<HookUseInsertionEffect/>}></Route>
        <Route path='useUse' element={<HookUseUse/>}></Route>
        <Route path='useDeferredValue' element={<HookUseDeferredValue/>}></Route>

      </Routes>
    </BrowserRouter>
     
  )
}

export default App
