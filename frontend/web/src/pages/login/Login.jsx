import React, { useState, useEffect } from "react";
import './login.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReCaptcha from "react-google-recaptcha";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const Login = () => {
    const navigate = useNavigate();
    
    // Funciones de reCAPTCHA

    const [captchaNumbers, setCaptchaNumbers] = useState({ a: 0, b: 0 });
    const [captchaInput, setCaptchaInput] = useState("");
    

    useEffect(() => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        setCaptchaNumbers({ a, b });
    }, []);

    const validateCaptcha = () => {
        return parseInt(captchaInput, 10) === (captchaNumbers.a + captchaNumbers.b);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        
        const username = event.target.formUsuario.value;
        const password = event.target.formPassword.value;

        if (!username || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if(!validateCaptcha()) {
            alert("Por favor, resuelve el captcha correctamente.");
            return;
        }
        
        // Si la autenticación es exitosa, redirigir al usuario a la página de inicio

        navigate('/admin');
    };

    

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
                        <Form.Group className="mb-3" controlId="formCaptcha">
                            <Form.Label>¿Cuánto es {captchaNumbers.a} + {captchaNumbers.b}?</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ingrese la respuesta"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </div>

                    <Button variant="primary" type="submit" className="w-100">
                        Iniciar Sesión
                    </Button>

                    <div className="text-center mt-3">
                        <a href="/register" className="register-link">
                            ¿No tienes cuenta? Regístrate aquí
                        </a>
                    </div>
                    <div className ="text-center mt-2">
                        <a href="/forgot-password" className="forgot-password-link">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default Login;