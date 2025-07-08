import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReCaptcha from "react-google-recaptcha";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const ForgotPassword = () => {
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

    const handleForgetPassword = (event) => {
        event.preventDefault();
        
        const username = event.target.formUsuario.value;

        if (!username) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if(!validateCaptcha()) {
            alert("Por favor, resuelve el captcha correctamente.");
            return;
        }
        
        // Si la autenticación es exitosa, redirigir al usuario a la página de inicio

        navigate('/restore-password');
    };


    return (
        <Container className="d-flex allign-items-center justify-content-center min-vh-100 bg-light">
            <Card className="login-card">
                <div className="text-center mb-4">
                    <h3 className="mt-2">
                        PostulAPPte
                    </h3>
                </div>

                <div className="text-center mb-4">
                    <h5 className="mt-2">
                        Recuperar Contraseña
                    </h5>
                    <p className="text-muted">
                        Por favor, ingrese su usuario y resuelva el captcha para recuperar su contraseña.
                    </p>
                </div>

                <Form onSubmit={handleForgetPassword}>
                    <Form.Group className="mb-3" controlId="formUsuario">
                        <Form.Label>
                            Usuario
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" required />
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
                        Recuperar Contraseña
                    </Button>

                </Form>
            </Card>
        </Container>
    );
}

export default ForgotPassword;