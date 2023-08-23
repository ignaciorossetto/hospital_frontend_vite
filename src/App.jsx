import {Routes, Route} from 'react-router-dom'
import LoginView from './pages/LoginView'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginView/>}/>
    </Routes>
    </>
  )
}

export default App