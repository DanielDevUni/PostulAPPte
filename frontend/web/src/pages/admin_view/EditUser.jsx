import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

// Datos de muestra temporal (puedes reemplazar luego por una llamada a backend)
const mockUsers = [
  {
    id: 1,
    name: "Juan",
    surname: "Pérez",
    username: "juanp",
    birthdate: "1990-05-12",
    address: "Calle 123",
    phone: "601234567",
    cellphone: "3012345678",
    status: "activo",
    typeDocument: "C.C",
    documentId: "12345678",
    gender: "Masculino",
    email: "juan@example.com",
    role: "postulante"
  },
  {
    id: 2,
    name: "Ana",
    surname: "Gómez",
    username: "anag",
    birthdate: "1988-01-22",
    address: "Av. Siempre Viva",
    phone: "601112233",
    cellphone: "3124567890",
    status: "activo",
    typeDocument: "C.C",
    documentId: "11112222",
    gender: "Femenino",
    email: "ana@example.com",
    role: "admin"
  }
];

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    // Simular carga de datos desde backend
    useEffect(() => {
    const user = mockUsers.find((u) => u.id === parseInt(id));
    if (user) setFormData(user);
    }, [id]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cambios guardados:", JSON.stringify(formData, null, 2));
    navigate(-1);
    };

    if (!formData) return <p className="text-center">Cargando...</p>;

    return (
        <Container className="my-4">
            <Card className="p-4">
            <h3 className="mb-4">Editar Usuario</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Tipo de Documento</Form.Label>
                        <Form.Select name="typeDocument" value={formData.typeDocument} onChange={handleChange}><option>C.C</option><option>T.I</option><option>C.E</option></Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4} >
                    <Form.Group className="mb-3">
                        <Form.Label>Número de Documento</Form.Label>
                        <Form.Control type="text" name="documentId" value={formData.documentId} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col md={4} >
                    <Form.Group className="mb-3">
                        <Form.Label>Género</Form.Label>
                        <Form.Select name="gender" value={formData.gender} onChange={handleChange}><option>Masculino</option><option>Femenino</option><option>Otro</option></Form.Select>
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col md={4} >
                    <Form.Group className="mb-3">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="text" name="cellphone" value={formData.cellphone} onChange={handleChange} />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Rol</Form.Label>
                        <Form.Select name="role" value={formData.role} onChange={handleChange}><option value="postulante">Postulante</option><option value="admin">Administrador</option><option value="talento_humano">Talento Humano</option></Form.Select>
                    </Form.Group>
                </Col>
                </Row>
                <div className="text-center">
                <Button variant="primary" type="submit">Guardar Cambios</Button>
                </div>
            </Form>
            </Card>
        </Container>
    );
};

export default EditUser;