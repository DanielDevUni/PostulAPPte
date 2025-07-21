import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const EditApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobId: '',
    education: '',
    experience: '',
    skills: '',
    availability: '',
    salary: '',
    coverLetter: '',
    cvFile: null,
  });

  useEffect(() => {
    // Simulacion
    const storedPostulation = {
      jobId: '1',
      education: 'Ingeniería de Sistemas',
      experience: '2 años como desarrollador frontend',
      skills: 'React, JavaScript, HTML, CSS',
      availability: '2025-07-20',
      salary: 3000000,
      coverLetter: 'Me encantaría aportar mis conocimientos...',
    };
    setFormData(storedPostulation);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Postulación actualizada:', formData);
    alert('Postulación actualizada con éxito');
    navigate('/applicant/applications');
  };

  return (
    <Container className="my-5">
      <Card className="p-4">
        <h4 className="mb-4">Editar Postulación</h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Nivel de estudios</Form.Label>
                <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Experiencia laboral</Form.Label>
                <Form.Control as="textarea" name="experience" value={formData.experience} onChange={handleChange} rows={3} required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Habilidades</Form.Label>
                <Form.Control as="textarea" name="skills" value={formData.skills} onChange={handleChange} rows={2} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Disponibilidad de inicio</Form.Label>
                <Form.Control type="date" name="availability" value={formData.availability} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Expectativa salarial</Form.Label>
                <Form.Control type="number" name="salary" value={formData.salary} onChange={handleChange} />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Actualizar Hoja de Vida (PDF)</Form.Label>
                <Form.Control type="file" accept=".pdf" name="cvFile" onChange={handleChange} />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Carta de Presentación (opcional)</Form.Label>
                <Form.Control as="textarea" name="coverLetter" value={formData.coverLetter} onChange={handleChange} rows={3} />
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Button type="submit" className="w-100">Actualizar Postulación</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default EditApplicationForm;