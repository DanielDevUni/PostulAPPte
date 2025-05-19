import React from "react";
import './adminHome.css';
import { Container } from "react-bootstrap";

const AdminHome = () => {
    return (
        <Container className="admin-jumbo bg-light p-5 mb-4 rounded.3">
            <div className="container-fluid py-5">
                <h1 className="display-4">
                    Bienvenido/a a PostulAPPte
                </h1>
                <p className="lead">
                    En el apartado de administración podrás gestionar los usuarios internos y los aplicantes de la plataforma.
                </p>
                <hr className="my-4" />
                <p>
                    Para crear nuevos usuarios internos, haz click en el botón "Crear Usuario Interno".
                    Para editar o eliminar usuarios internos, haz click en el botón "Editar Usuario Interno".
                    Para editar o eliminar aplicantes, haz click en el botón "Editar Aplicante".
                </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                    Crear Usuario Interno
                </a>
                <a className="btn btn-secondary btn-lg" href="#" role="button">
                    Editar Usuario Interno
                </a>
                <a className="btn btn-success btn-lg" href="#" role="button">
                    Editar Aplicante
                </a>
            </div>
        </Container>
    )
}

export default AdminHome;