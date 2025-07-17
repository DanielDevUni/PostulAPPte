import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// Datos simulados
const aplicantes = [
  {
    id: 1,
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

const EditarAplicante = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    birthdate: '',
    address: '',
    phone: '',
    cellphone: '',
    status: '',
    typeDocument: '',
    documentId: '',
    gender: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    const aplicante = aplicantes.find(ap => ap.id === parseInt(id));
    if (aplicante) {
      setFormData(aplicante);
    } else {
      alert('Aplicante no encontrado');
      navigate('/');
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Datos actualizados:', formData);
    alert('Aplicante editado correctamente');
    navigate('/');
  };

  return (
     <Container className="mt-5 d-flex justify-content-center">
    <div className="card shadow p-4" style={{ maxWidth: '900px', width: '100%', borderRadius: '1rem' }}>
      <h3 className="mb-4 text-center">Editar Aplicante</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control name="surname" value={formData.surname} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control name="username" value={formData.username} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Celular</Form.Label>
              <Form.Control name="cellphone" value={formData.cellphone} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Control name="status" value={formData.status} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Control name="typeDocument" value={formData.typeDocument} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número de Documento</Form.Label>
              <Form.Control name="documentId" value={formData.documentId} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Control name="gender" value={formData.gender} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Control name="role" value={formData.role} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button type="submit" variant="primary" size="lg">
            Guardar Cambios
          </Button>
        </div>
      </Form>
    </div>
  </Container>
  );
};

export default EditarAplicante;
