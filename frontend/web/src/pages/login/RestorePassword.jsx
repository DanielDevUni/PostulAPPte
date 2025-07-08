import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReCaptcha from "react-google-recaptcha";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const RestorePassword = () => {
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

    const isEmpty = (value) => !value || value.trim() === "";
    
    const isValidPassword = (password) => {
        const errors = [];
        if (password.length < 8) errors.push("al menos 8 caracteres");
        if (!/[A-Z]/.test(password)) errors.push("una letra mayúscula");
        if (!/[0-9]/.test(password)) errors.push("un número");
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("un carácter especial");
        return errors;
    };

    const handleForgetPassword = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const data = {
            password: form.formPassword.value,
            confirmPassword: form.formConfirmPassword.value,
        } 

        if (isEmpty(data.password) || isEmpty(data.confirmPassword)) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        if (data.password !== data.confirmPassword) {
            alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
            return;
        }
        if(!validateCaptcha()) {
            alert("Por favor, resuelve el captcha correctamente.");
            return;
        }

        const passwordErrors = isValidPassword(data.password);
        if (passwordErrors.length > 0) {
            alert(`La contraseña debe contener ${passwordErrors.join(", ")}.`);
            return;
        }

        // Aquí puedes agregar la lógica para enviar la nueva contraseña al servidor
        console.log("Nueva contraseña establecida:", data.password);
        // Si la autenticación es exitosa, redirigir al usuario a la página de inicio
        navigate('/login');
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
                        Por favor, ingrese su contraseña, confirmela y resuelva el captcha para cambiar su contraseña.
                    </p>
                </div>

                <Form onSubmit={handleForgetPassword}>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>
                            Contraseña
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nueva contraseña" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>
                            Confirmar Contraseña
                        </Form.Label>
                        <Form.Control type="text" placeholder="Confirme su contraseña" required />
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

export default RestorePassword;