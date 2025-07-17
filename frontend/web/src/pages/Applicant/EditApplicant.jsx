import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// Simulamos una base de datos local con un aplicante
const aplicantes = [
  {
    id: 1,
    name: "Ana",
    surname: "Gómez",
    username: "anag",
    email: "ana@example.com",
    password: "12345678",
    confirmPassword: "12345678",
    birthdate: "1988-01-22",
    gender: "Femenino",
    address: "Av. Siempre Viva",
    phone: "601112233",
    cellphone: "3124567890",
    documentId: "11112222",
    typeDocument: "C.C",
    status: "activo"
  }
];

const EditarAplicante = () => {
  const { id } = useParams(); // Obtenemos el ID desde la URL
  const navigate = useNavigate(); // Para redireccionar al usuario

  // Estado para mostrar o no la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Estado general del formulario, con todos los campos del aplicante
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    gender: '',
    address: '',
    phone: '',
    cellphone: '',
    documentId: '',
    typeDocument: '',
    status: ''
  });

  // Este efecto se ejecuta una vez al montar el componente
  useEffect(() => {
    const aplicante = aplicantes.find(ap => ap.id === parseInt(id));
    if (aplicante) {
      setFormData(aplicante); // Cargamos los datos en el formulario
    } else {
      alert('Aplicante no encontrado');
      navigate('/');
    }
  }, [id]);

  // Esta función actualiza el estado a medida que el usuario escribe
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Aquí validamos y enviamos el formulario
  const handleSubmit = e => {
    e.preventDefault();

    const requiredFields = ['name', 'surname', 'username', 'email', 'password', 'confirmPassword'];
    const missingField = requiredFields.find(field => !formData[field]);
    if (missingField) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Datos actualizados:', formData); // Aquí iría el fetch/axios real
    alert('Aplicante editado correctamente');
    navigate('/');
  };

  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center bg-info-subtle">
      <div className="card shadow p-4" style={{ maxWidth: '900px', width: '100%', borderRadius: '1rem' }}>
        <h3 className="mb-4 text-center">Editar Aplicante</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Primera columna del formulario */}
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
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="Mostrar contraseñas"
                className="mb-3"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />

              <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* Segunda columna del formulario */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Género</Form.Label>
                <Form.Control name="gender" value={formData.gender} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control name="address" value={formData.address} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control name="phone" value={formData.phone} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Celular</Form.Label>
                <Form.Control name="cellphone" value={formData.cellphone} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de documento</Form.Label>
                <Form.Select name="typeDocument" value={formData.typeDocument} onChange={handleChange}>
                  <option value="">Seleccione</option>
                  <option value="C.C">Cédula de Ciudadanía</option>
                  <option value="T.I">Tarjeta de Identidad</option>
                  <option value="C.E">Cédula de Extranjería</option>
                  <option value="P.A">Pasaporte</option>
                  <option value="NIT">NIT</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Número de documento</Form.Label>
                <Form.Control
                  name="documentId"
                  value={formData.documentId}
                  readOnly // no se permite cambiar el número
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Select name="status" value={formData.status} onChange={handleChange} required>
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </Form.Select>
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
