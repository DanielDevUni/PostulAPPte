import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './homeHeader.css';

function BrandExample() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">PostulAPPte</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Iniciar Sesión</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  );
}

export default BrandExample;