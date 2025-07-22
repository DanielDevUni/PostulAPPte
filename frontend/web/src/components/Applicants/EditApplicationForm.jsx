import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const EditApplicationForm = () => {
  const { id } = useParams(); // id de la postulación
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    undergraduate_degree: null,
    postgraduate_degree: null,
    resume_pdf: null,
    statement: '',
  });

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    // Simula obtener datos existentes (reemplaza con API real si tienes)
    const fetchApplication = async () => {
      // Aquí llamas tu API: ej. await getApplicationById(id);
      const mock = {
        statement: 'Me interesa esta vacante por...',
      };
      setInitialData(mock);
      setFormData((prev) => ({
        ...prev,
        statement: mock.statement,
      }));
    };

    fetchApplication();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí llamas a tu API para actualizar: ej. await updateApplication(id, formData);
    console.log('Editando postulación:', formData);
    alert('Postulación actualizada con éxito');
    navigate('/applicant/applications'); // Vuelve a la lista
  };

  return (
    <div className="auth-bg d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="auth-container" style={{ width: '100%', maxWidth: '600px' }}>
        <Card className="p-4 card-form shadow">
          <h4 className="mb-4 title-custom text-center">Editar Postulación</h4>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-custom">Título de Pregrado (PDF)</Form.Label>
                  <Form.Control type="file" name="undergraduate_degree" accept=".pdf" onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-custom">Título de Posgrado (PDF)</Form.Label>
                  <Form.Control type="file" name="postgraduate_degree" accept=".pdf" onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-custom">Hoja de Vida (PDF)</Form.Label>
                  <Form.Control type="file" name="resume_pdf" accept=".pdf" onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-4">
                  <Form.Label className="text-custom">¿Por qué deberían contratarte?</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="statement"
                    rows={4}
                    value={formData.statement}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Button type="submit" className="btn-custom w-100">
                  Guardar Cambios
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default EditApplicationForm;
