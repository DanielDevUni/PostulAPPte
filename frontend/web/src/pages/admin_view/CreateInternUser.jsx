import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Col } from "react-bootstrap";
import './createInternUser.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";



const createUserAdmin = () => {

    const navigate = useNavigate();
    
    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.formNombre.value;
        const surname = event.target.formApellido.value;
        const username = event.target.formUsuario.value;
        const birthdate = event.target.formBirthdate.value;
        const address = event.target.formAddress.value;
        const phone = event.target.formPhone.value;
        const cellphone = event.target.formCellphone.value;
        const status = event.target.formStatus.value;
        const typeDocument = event.target.formTypeDocument.value;
        const documentId = event.target.formDocumentId.value;
        const gender = event.target.formGender.value;
        const email = event.target.formEmail.value;
        const password = event.target.formPassword.value;
        const confirmPassword = event.target.formConfirmPassword.value;
        const roleUser = event.target.formRole.value;

        if (!name || !surname || !username || !birthdate || !address || !phone || !cellphone || !status || !typeDocument || !documentId || !gender || !email || !password || !confirmPassword ||roleUser) {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }
        else if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
            return;
        }
        
        // Lógica de registro aquí
        console.log("Captcha completado:", captchaValue);
        navigate('/login');
    };

    const handleRecaptchaChange = (value) => {
        setCaptchaValue(value);
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
                            <Form.Group className="mb-3" controlId="formStatus">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select required>
                                    <option value="">Seleccione su estado</option>
                                    <option value="active">Activo</option>
                                    <option value="inactive">Inactivo</option>
                                </Form.Select>
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
                            <Form.Group  className="mb-3" controlId="formRole">
                                <Form.Label>Rol</Form.Label>
                                <Form.Select required>
                                    <option value="">Seleccione el rol del usuario</option>
                                    <option value="admin">Administrador</option>
                                    <option value="intern">Talento humano</option>
                                </Form.Select>
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

export default createUserAdmin;