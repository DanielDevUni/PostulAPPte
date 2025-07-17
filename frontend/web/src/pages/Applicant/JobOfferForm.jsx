import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const JobOfferForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    salary: '',
    type: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
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
          <Form.Label>Título del Puesto</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipo de Contrato</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Selecciona una opción</option>
            <option value="Tiempo completo">Tiempo completo</option>
            <option value="Medio tiempo">Medio tiempo</option>
            <option value="Remoto">Remoto</option>
            <option value="Pasantía">Pasantía</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salario</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Requisitos</Form.Label>
          <Form.Control
            as="textarea"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={3}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción del Puesto</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            required
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
