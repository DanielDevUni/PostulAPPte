import React from "react";
import './adminHome.css';
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const AdminHome = () => {
    const navigate = useNavigate();
    // Redirigir a la página de inicio si el usuario no es un administrador
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
                <Button variant="primary" size="lg" className="mb-3" onClick={() => navigate('/admin/create-user')}>
                    Crear Usuario Interno
                </Button>
                <Button variant="secondary" size="lg" className="mb-3" onClick={() => navigate('/admin/intern-user-list')}>
                    Editar Usuario Interno
                </Button>
                <Button variant="success" size="lg" className="mb-3" onClick={() => navigate('/edit-applicant/1')}> 
                    Editar Aplicante
                </Button>
            </div>
        </Container>
    )
}

export default AdminHome;