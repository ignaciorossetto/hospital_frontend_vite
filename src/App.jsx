import {Routes, Route} from 'react-router-dom'
import LoginView from './pages/LoginView/LoginView'
import HomeView from './pages/HomeView/HomeView'
import EstudiosView from './pages/EstudiosView/EstudiosView'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/login' element={<LoginView/>}/>
      <Route path='/estudios' element={<EstudiosView/>}/>
    </Routes>
    <Footer />
    </>

  )
}

export default App