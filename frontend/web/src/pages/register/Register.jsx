import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Col } from "react-bootstrap";
import './register.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReCaptcha from "react-google-recaptcha";


const Register = () => {
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

    


    // Funciones de validación

    const isEmpty = (value) => !value || value.trim() === "";
    
    const isValidPassword = (password) => {
        const errors = [];
        if (password.length < 8) errors.push("al menos 8 caracteres");
        if (!/[A-Z]/.test(password)) errors.push("una letra mayúscula");
        if (!/[0-9]/.test(password)) errors.push("un número");
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("un carácter especial");
        return errors;
    };

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const data = {
            name: form.formNombre.value,
            surname: form.formApellido.value,
            username: form.formUsuario.value,
            birthdate: form.formBirthdate.value,
            address: form.formAddress.value,
            phone: form.formPhone.value,
            cellphone: form.formCellphone.value,
            typeDocument: form.formTypeDocument.value,
            documentId: form.formDocumentId.value,
            gender: form.formGender.value,
            email: form.formEmail.value,
            password: form.formPassword.value,
            confirmPassword: form.formConfirmPassword.value,
        };

        // Validación del reCAPTCHA
        if(!validateCaptcha()) {
            alert("Por favor, resuelve el captcha correctamente.");
            return;
        }

        // Verifica si algún campo obligatorio está vacío
        for (const key in data) {
            if (isEmpty(data[key])) {
                alert("Por favor, completa todos los campos requeridos.");
                return;
            }
        }

        if (data.password !== data.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const passwordErrors = isValidPassword(data.password);
        if (passwordErrors.length > 0) {
            alert("La contraseña debe contener " + passwordErrors.join(", ") + ".");
            return;
        }

        // Si todo está bien
        console.log("Registro exitoso:", data);
        navigate('/login');
    };


    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <Card className="register-card p-4 w-100" style={{ maxWidth: "900px" }}>
                <div className="text-center mb-4">
                    <h3>PostulAPPte</h3>
                </div>

                <Form onSubmit={handleRegister}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formApellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su apellido" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formUsuario">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su usuario" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBirthdate">
                                <Form.Label>Fecha de Nacimiento</Form.Label>
                                <Form.Control type="date" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su dirección" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="tel" placeholder="Ingrese su número de teléfono" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formCellphone">
                                <Form.Label>Celular</Form.Label>
                                <Form.Control type="tel" placeholder="Ingrese su número de celular" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formTypeDocument">
                                <Form.Label>Tipo de Documento</Form.Label>
                                <Form.Select required>
                                    <option value="">Seleccione su tipo de documento</option>
                                    <option value="cc">Cédula de Ciudadanía</option>
                                    <option value="ti">Tarjeta de Identidad</option>
                                    <option value="ce">Cédula de Extranjería</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formDocumentId">
                                <Form.Label>Número de Documento</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su número de documento" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formGender">
                                <Form.Label>Género</Form.Label>
                                <Form.Select required>
                                    <option value="">Seleccione su género</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Femenino</option>
                                    <option value="nb">No Binario</option>
                                    <option value="other">Otro</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su correo electrónico" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña" required />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Confirme su contraseña" required />
                            </Form.Group>
                        </Col>

                        <Col xs={12}>
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
                        </Col>

                        <Col xs={12}>
                            <Button variant="primary" type="submit" className="w-100">
                                Registrarse
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
}

export default Register;