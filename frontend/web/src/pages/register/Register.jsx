import React from "react";
import './register.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ReCaptcha from "react-google-recaptcha";


const Register = () => {

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica de registro
        // Por ejemplo, enviar una solicitud a tu API para crear un nuevo usuario
        // Si el registro es exitoso, redirigir al usuario a la página de inicio
        navigate('/login');
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
            <Card className="register-card">
                <div className="text-center mb-4">
                    <h3 className="mt-2">
                        PostulAPPte
                    </h3>
                </div>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>
                            Nombre
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formApellido">
                        <Form.Label>
                            Apellido
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su apellido" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsuario">
                        <Form.Label>
                            Usuario
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBirthdate">
                        <Form.Label>
                            Fecha de Nacimiento
                        </Form.Label>
                        <Form.Control type="date" placeholder="Ingrese su fecha de nacimiento" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>
                            Dirección
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su dirección" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>
                            Teléfono
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Ingrese su número de teléfono" required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formCellphone">
                        <Form.Label>
                            Celular
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Ingrese su número de celular" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStatus">
                        <Form.Label>
                            Estado
                        </Form.Label>
                        <Form.Select required>
                            <option value="">Seleccione su estado</option>
                            <option value="active">Activo</option>
                            <option value="inactive">Inactivo</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTypeDocument">
                        <Form.Label>
                            Tipo de Documento
                        </Form.Label>
                        <Form.Select required>
                            <option value="">Seleccione su tipo de documento</option>
                            <option value="cc">Cédula de Ciudadanía</option>
                            <option value="ti">Tarjeta de Identidad</option>
                            <option value="ce">Cédula de Extranjería</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDocumentId">
                        <Form.Label>
                            Número de Documento
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su número de documento" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label>
                            Género
                        </Form.Label>
                        <Form.Select required>
                            <option value="">Seleccione su género</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                            <option value="nb">No Binario</option>
                            <option value="other">Otro</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>
                            Correo Electrónico
                        </Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo electrónico" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>
                            Contraseña
                        </Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>
                            Confirmar Contraseña
                        </Form.Label>
                        <Form.Control type="password" placeholder="Confirme su contraseña" required />
                    </Form.Group>

                    <div className="mb-3 d-flex justify-content-center">
                        <ReCaptcha
                            sitekey="SiteKey"
                            onChange={handleRecaptchaChange}
                        />
                    </div>

                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default Register;