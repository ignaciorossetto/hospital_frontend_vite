import { Link } from 'react-router-dom'

const HomeView = () => {
  return (
    <>
        <h1>
        Home
        </h1>
        <ul>
            <li>
            <Link className='homeLink' to={'/login'}>login</Link>
            </li>

        </ul>
        </>
  )
}

export default HomeView