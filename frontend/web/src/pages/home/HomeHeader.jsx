import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './homeHeader.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BrandExample() {
  const [role, setRole] = useState(''); // Simulate role fetching
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    setIsLoggedIn(!!token);
    setRole(userRole || '');
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Link className="navbar-brand" to="#">PostulAPPte</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            {isLoggedIn && (
              <>
                
                {role === 'admin' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Administración</Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="#">Perfil</Link>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Iniciar Sesión</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Registrarse</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="#">Sobre nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contacto</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default BrandExample;