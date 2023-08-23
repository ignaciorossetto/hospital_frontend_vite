import {Routes, Route} from 'react-router-dom'
import LoginView from './pages/LoginView'
import HomeView from './pages/HomeView'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/login' element={<LoginView/>}/>
    </Routes>
    </>
  )
}

export default App