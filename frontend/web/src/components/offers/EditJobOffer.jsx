import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { updateOffer, getOfferById } from '../../api/offer';

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await getOfferById(id);
        const data = response.data;

        setFormData({
          name: data.name || '',
          level: data.level || '',
          title: data.title || '',
          function: data.function || '',
          salary: data.salary || '',
          date_start: data.date_start || '',
          date_finish: data.date_finish || '',
          status: data.status || false,
          charge_type_id: data.charge_type_id || '',
          user_id: data.user_id || '',
          rank_id: data.rank_id || ''
        });
        setLoading(false);
      } catch (error) {
        console.error('❌ Error al cargar los datos de la oferta:', error);
        alert('Hubo un error al cargar los datos de la oferta');
      }
    };

    fetchOffer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }

      await updateOffer(id, form);
      alert('✅ Oferta actualizada exitosamente');
    } catch (error) {
      console.error('❌ Error al actualizar la oferta:', error);
      alert('Hubo un error al actualizar la oferta');
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status" />
        <p>Cargando datos de la oferta...</p>
      </div>
    );
  }

  return (
    <Container fluid className="py-5 px-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col lg={10} xl={9}>
          <Card className="p-4 card-form shadow-sm border-0">
            <h4 className="mb-4 title-custom text-center">✏️ Editar Oferta Laboral</h4>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">Nombre de la Oferta</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">Nivel</Form.Label>
                    <Form.Control type="text" name="level" value={formData.level} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">Título</Form.Label>
                    <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">Salario</Form.Label>
                    <Form.Control type="number" name="salary" value={formData.salary} onChange={handleChange} step="0.01" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="text-custom">Función</Form.Label>
                <Form.Control as="textarea" name="function" value={formData.function} onChange={handleChange} rows={3} />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">Fecha de Inicio</Form.Label>
                    <Form.Control type="date" name="date_start" value={formData.date_start} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">Fecha de Finalización</Form.Label>
                    <Form.Control type="date" name="date_finish" value={formData.date_finish} onChange={handleChange} />
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
                  className="text-custom"
                />
              </Form.Group>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">ID Tipo de Cargo</Form.Label>
                    <Form.Control type="number" name="charge_type_id" value={formData.charge_type_id} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">ID del Usuario</Form.Label>
                    <Form.Control type="number" name="user_id" value={formData.user_id} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-custom">ID del Rango</Form.Label>
                    <Form.Control type="number" name="rank_id" value={formData.rank_id} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button type="submit" className="btn-custom px-5">
                  Actualizar Oferta
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditJobOffer;
