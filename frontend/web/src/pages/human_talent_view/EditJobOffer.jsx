import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';


const EditJobOffer = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    level: '',
    title: '',
    function: '',
    salary: '',
    date_start: '',
    date_finish: '',
    status: false,
    charge_type_id: '',
    user_id: '',
    rank_id: ''
  });

  useEffect(() => {
    // Cargar oferta existente
    axios.get(`/api/job-offers/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error('Error al cargar la oferta:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/job-offers/${id}`, formData)
      .then(() => alert('Oferta actualizada correctamente'))
      .catch(err => console.error('Error al actualizar:', err));
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-lg">
        <h2 className="mb-4 text-center">Editar Oferta Laboral</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre de la Oferta</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nivel</Form.Label>
                <Form.Control
                  type="text"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Salario</Form.Label>
                <Form.Control
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  step="0.01"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Función</Form.Label>
            <Form.Control
              as="textarea"
              name="function"
              value={formData.function}
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de Inicio</Form.Label>
                <Form.Control
                  type="date"
                  name="date_start"
                  value={formData.date_start}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de Finalización</Form.Label>
                <Form.Control
                  type="date"
                  name="date_finish"
                  value={formData.date_finish}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Check
              type="checkbox"
              label="¿Está activa la oferta?"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />
          </Form.Group>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>ID Tipo de Cargo</Form.Label>
                <Form.Control
                  type="number"
                  name="charge_type_id"
                  value={formData.charge_type_id}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>ID del Usuario</Form.Label>
                <Form.Control
                  type="number"
                  name="user_id"
                  value={formData.user_id}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>ID del Rango</Form.Label>
                <Form.Control
                  type="number"
                  name="rank_id"
                  value={formData.rank_id}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="success" type="submit" className="px-5">
              Guardar Cambios
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default EditJobOffer;
