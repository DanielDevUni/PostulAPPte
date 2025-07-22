import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    
    // Estado para el CAPTCHA
    const [captchaNumbers, setCaptchaNumbers] = useState({ a: 0, b: 0 });
    const [captchaInput, setCaptchaInput] = useState("");

    // Generar números aleatorios para el CAPTCHA
    useEffect(() => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        setCaptchaNumbers({ a, b });
    }, []);

    // Validar el CAPTCHA
    const validateCaptcha = () => {
        return parseInt(captchaInput, 10) === (captchaNumbers.a + captchaNumbers.b);
    };

    // Manejar el envío del formulario
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
        
        // Redirigir a la página de restablecimiento
        navigate('/restore-password');
    };

    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#b4c7ff2c' }}>
            <Card className="p-4 shadow-sm card-form" style={{ width: '100%', maxWidth: '450px' }}>
                <div className="text-center mb-4">
                    <h3 className="title-custom">
                        PostulAPPte
                    </h3>
                </div>

                <div className="text-center mb-4">
                    <h5 className="title-custom">
                        Recuperar Contraseña
                    </h5>
                    <p className="text-muted desc-custom">
                        Por favor, ingrese su usuario y resuelva el captcha para recuperar su contraseña.
                    </p>
                </div>

                <Form onSubmit={handleForgetPassword}>
                    <Form.Group className="mb-3" controlId="formUsuario">
                        <Form.Label className="text-custom">
                            Usuario
                        </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese su usuario" 
                            className="border-custom"
                            required 
                        />
                    </Form.Group>

                    <div className="mb-3">
                        <Form.Group controlId="formCaptcha">
                            <Form.Label className="text-custom">
                                ¿Cuánto es {captchaNumbers.a} + {captchaNumbers.b}?
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ingrese la respuesta"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                className="border-custom"
                                required
                            />
                        </Form.Group>
                    </div>
                    
                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100 btn-custom mt-3"
                    >
                        Recuperar Contraseña
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default ForgotPassword;