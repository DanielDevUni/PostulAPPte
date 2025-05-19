import React, { useState } from "react";
import './login.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReCaptcha from "react-google-recaptcha";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica de autenticación
        // Por ejemplo, enviar una solicitud a tu API para verificar las credenciales
        // Si la autenticación es exitosa, redirigir al usuario a la página de inicio
        navigate('/admin');
    };

    const handleRecaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!captchaValue) {
            alert("Por favor, completa el reCAPTCHA.");
            return;
        }
        // Aquí puedes agregar la lógica de autenticación
        // Por ejemplo, enviar una solicitud a tu API para verificar las credenciales
        console.log("Captcha completado:", captchaValue);
    }

    return (
        <Container className="d-flex allign-items-center justify-content-center min-vh-100 bg-light">
            <Card className="login-card">
                <div className="text-center mb-4">
                    <h3 className="mt-2">
                        PostulAPPte
                    </h3>
                </div>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formUsuario">
                        <Form.Label>
                            Usuario
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>
                            Contraseña
                        </Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" required />
                    </Form.Group>

                    <div className="mb-3 d-flex justify-content-center">
                        <ReCaptcha
                            sitekey="SiteKey"
                            onChange={handleRecaptchaChange}
                        />
                    </div>

                    <Button variant="primary" type="submit" className="w-100">
                        Iniciar Sesión
                    </Button>

                    <div className="text-center mt-3">
                        <a href="/register" className="register-link">
                            ¿No tienes cuenta? Regístrate aquí
                        </a>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default Login;