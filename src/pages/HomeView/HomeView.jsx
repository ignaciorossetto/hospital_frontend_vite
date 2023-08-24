import { Link } from 'react-router-dom'

const HomeView = () => {
  return (
    <>
        <h1>
        Home
        </h1>
        <button className='homeButton'>
                <Link className='homeLink' to={'/login'}>login</Link>
        </button>
        <br />
        <br />
        <button className='homeButton'>
                <Link className='homeLink' to={'/estudios'}>estudios</Link>
        </button>

        </>
  )
}

export default HomeView