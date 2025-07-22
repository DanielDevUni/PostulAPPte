import Icon from './Icons';

function NavbarAuth() {
  return (
      <nav className="navbar navbar-expand-lg navbar-postulappte shadow">
        <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <div
                className="rounded-circle bg-custom d-flex align-items-center justify-content-center me-2 fw-bold"
                style={{ width: '40px', height: '40px' }}
              >
                <Icon.Hurricane size={24} />
              </div>
              Postulappte
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">Iniciar Sesión</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/offers">Ofertas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users">Usuarios</a>
                </li>
            </ul>
            </div>
        </div>
      </nav>
  );
}

export default NavbarAuth;