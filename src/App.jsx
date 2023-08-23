import {Routes, Route} from 'react-router-dom'
import LoginView from './pages/LoginView'
import SignUpView from './pages/SignUpView'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginView/>}/>
      <Route path='/sign-up' element={<SignUpView/>}/>
    </Routes>
    </>
  )
}

export default App