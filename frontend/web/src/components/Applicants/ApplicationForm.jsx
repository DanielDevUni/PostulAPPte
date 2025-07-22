import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

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
    <div className="auth-bg d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="auth-container" style={{ width: '100%', maxWidth: '600px' }}>
        <Card className="p-4 card-form shadow">
          <h4 className="mb-4 title-custom text-center">Formulario de Postulación</h4>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-custom">Título de Pregrado (PDF)</Form.Label>
                  <Form.Control type="file" accept=".pdf" name="undergraduate_degree" onChange={handleChange} required />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-custom">Título de Posgrado (PDF)</Form.Label>
                  <Form.Control type="file" accept=".pdf" name="postgraduate_degree" onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-custom">Hoja de Vida (PDF)</Form.Label>
                  <Form.Control type="file" accept=".pdf" name="resume_pdf" onChange={handleChange} required />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-4">
                  <Form.Label className="text-custom">¿Por qué deberían contratarte?</Form.Label>
                  <Form.Control as="textarea" name="statement" rows={4} onChange={handleChange} required />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Button type="submit" className="btn-custom w-100">
                  Enviar Postulación
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationForm;
