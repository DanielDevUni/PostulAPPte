import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const JobOfferForm = () => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nueva oferta:', formData);
    alert('Oferta registrada exitosamente');
    // Aquí iría el POST al backend
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Registrar Nueva Oferta Laboral</h2>
      <Form onSubmit={handleSubmit}>

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

        <Form.Group className="mb-3">
          <Form.Label>Fecha de Inicio</Form.Label>
          <Form.Control
            type="date"
            name="date_start"
            value={formData.date_start}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha de Finalización</Form.Label>
          <Form.Control
            type="date"
            name="date_finish"
            value={formData.date_finish}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="¿Está activa la oferta?"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ID Tipo de Cargo</Form.Label>
          <Form.Control
            type="number"
            name="charge_type_id"
            value={formData.charge_type_id}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ID del Usuario</Form.Label>
          <Form.Control
            type="number"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ID del Rango</Form.Label>
          <Form.Control
            type="number"
            name="rank_id"
            value={formData.rank_id}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar Oferta
        </Button>
      </Form>
    </Container>
  );
};

export default JobOfferForm;
