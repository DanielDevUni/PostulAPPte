import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    undergraduate_degree: null,
    postgraduate_degree: null,
    resume_pdf: null,
    statement: '',
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
    console.log('Postulación enviada:', formData);
    alert('Postulación enviada con éxito');
  };

  return (
    <Container className="my-5">
      <Card className="p-4">
        <h4 className="mb-4">Formulario de Postulación</h4>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Título de Pregrado (PDF)</Form.Label>
                <Form.Control type="file" accept=".pdf" name="undergraduate_degree" onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Título de Posgrado (PDF)</Form.Label>
                <Form.Control type="file" accept=".pdf" name="postgraduate_degree" onChange={handleChange} />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Hoja de Vida (PDF)</Form.Label>
                <Form.Control type="file" accept=".pdf" name="resume_pdf" onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Por qué deberían contratarte</Form.Label>
                <Form.Control as="textarea" name="statement" rows={4} onChange={handleChange} required />
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

export default ApplicationForm;
