import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const PostulationForm = () => {
  const [formData, setFormData] = useState({
    jobId: '', // ID de la oferta laboral
    education: '',
    experience: '',
    skills: '',
    availability: '',
    salary: '',
    coverLetter: '',
    cvFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría el envío a backend
    console.log('Postulación enviada:', formData);
    alert('Postulación enviada con éxito');
  };

  return (
    <Container className="my-5">
      <Card className="p-4">
        <h4 className="mb-4">Formulario de Postulación</h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Nivel de estudios</Form.Label>
                <Form.Control type="text" name="education" onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Experiencia laboral</Form.Label>
                <Form.Control as="textarea" name="experience" onChange={handleChange} rows={3} required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Habilidades</Form.Label>
                <Form.Control as="textarea" name="skills" onChange={handleChange} rows={2} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Disponibilidad de inicio</Form.Label>
                <Form.Control type="date" name="availability" onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Expectativa salarial</Form.Label>
                <Form.Control type="number" name="salary" onChange={handleChange} />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Hoja de Vida (PDF)</Form.Label>
                <Form.Control type="file" accept=".pdf" name="cvFile" onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Carta de Presentación (opcional)</Form.Label>
                <Form.Control as="textarea" name="coverLetter" onChange={handleChange} rows={3} />
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Button type="submit" className="w-100">Enviar Postulación</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default PostulationForm;
