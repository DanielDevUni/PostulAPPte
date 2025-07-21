import React from "react";
import './home.css';
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container className="home-jumbo bg-light p-5 mb-4 rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-4">
                    Bienvenido/a a PostulAPPte
                </h1>
                <p className="lead">
                    La plataforma para encontrar tu trabajo ideal si haces parte del mundo de sistemas y desarrollo.
                </p>
                <hr className="my-4" />
                <p>
                    Explora nuestras ofertas de trabajo y postúlate a las que más te interesen.
                    ¡Inicia Sesión o Regístrate para poder ver todas nuestras ofertas de trabajo!
                </p>
                <div className="text-center">
                    <Button variant="primary" size="lg" onClick={() => navigate('/admin')}>
                        Iniciar Sesión
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default Home;