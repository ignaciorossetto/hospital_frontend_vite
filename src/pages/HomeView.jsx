import { Link } from 'react-router-dom'

const HomeView = () => {
  return (
    <>
        <h1>
        Welcome to landing page
        </h1>
        <Link to={'/login'}>login</Link>
        </>
  )
}

export default HomeView