import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='logo' src={'/hospital_logo.png'} alt='logo'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/usuarios">Usuario</Link>
                            <Link className="nav-link" to="/estudios">Estudios</Link>
                            <Link className="nav-link" to="/institucion" >Institucion</Link>
                            <button className="button_log" ><Link to="/login">Acceder</Link></button>
                            <button className="button"><Link to="/contacto">Contacto</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar