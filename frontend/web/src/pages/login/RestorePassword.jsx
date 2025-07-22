import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RestorePassword = () => {
    const navigate = useNavigate();
    
    // Estado para el CAPTCHA
    const [captchaNumbers, setCaptchaNumbers] = useState({ a: 0, b: 0 });
    const [captchaInput, setCaptchaInput] = useState("");
    const [passwordError, setPasswordError] = useState("");

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

    const isEmpty = (value) => !value || value.trim() === "";
    
    const isValidPassword = (password) => {
        const errors = [];
        if (password.length < 8) errors.push("al menos 8 caracteres");
        if (!/[A-Z]/.test(password)) errors.push("una letra mayúscula");
        if (!/[0-9]/.test(password)) errors.push("un número");
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("un carácter especial");
        return errors;
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const errors = isValidPassword(password);
        setPasswordError(errors.length > 0 ? `La contraseña debe contener ${errors.join(", ")}` : "");
    };

    const handleRestorePassword = (event) => {
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

        // Lógica para enviar la nueva contraseña al servidor
        console.log("Nueva contraseña establecida:", data.password);
        navigate('/login');
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
                        Restablecer Contraseña
                    </h5>
                    <p className="text-muted desc-custom">
                        Por favor, ingrese su nueva contraseña, confírmela y resuelva el captcha.
                    </p>
                </div>

                <Form onSubmit={handleRestorePassword}>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label className="text-custom">
                            Nueva Contraseña
                        </Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Ingrese su nueva contraseña" 
                            className="border-custom"
                            onChange={handlePasswordChange}
                            required 
                        />
                        {passwordError && <small className="text-danger">{passwordError}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label className="text-custom">
                            Confirmar Contraseña
                        </Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Confirme su contraseña" 
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
                        Restablecer Contraseña
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default RestorePassword;