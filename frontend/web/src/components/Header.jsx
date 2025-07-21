import Icon from './Icons';

function NavbarAuth() {
  return (
<<<<<<< HEAD
      <nav class="navbar navbar-expand-lg navbar-postulappte shadow">
        <div class="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <div
                className="rounded-circle bg-custom d-flex align-items-center justify-content-center me-2 fw-bold"
                style={{ width: '40px', height: '40px' }}
              >
                <Icon.Hurricane size={24} />
              </div>
              Postulappte
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/login">Iniciar Sesión</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/offers">Ofertas</a>
                </li>
            </ul>
=======
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
                <a className="nav-link" href="#">Ofertas</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Postulaciones</a>
                </li>
            </ul>
            <span className="navbar-text">
                Space to User
            </span>
>>>>>>> 6a68097e31bbec786eda051083ca5d2112e8d605
            </div>
        </div>
      </nav>
  );
}

export default NavbarAuth;