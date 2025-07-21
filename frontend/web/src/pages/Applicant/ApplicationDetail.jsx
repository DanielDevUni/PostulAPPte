import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const ApplicationDetail = ({ applicationId }) => {
  const [application, setApplication] = useState(null);

  useEffect(() => {
    // Simular fetch 
    const fetchApplication = async () => {
      //api
      const mockData = {
        jobTitle: 'Desarrollador Frontend',
        education: 'Ingeniería de Sistemas',
        experience: '2 años en desarrollo web',
        skills: 'React, JavaScript, CSS',
        availability: '2025-08-01',
        salary: 4000000,
        coverLetter: 'Me encantaría formar parte del equipo.',
        cvUrl: '/documentos/cv_oscar.pdf',
        createdAt: '2025-07-10',
        applicantName: 'Oscar Muñoz',
      };
      setApplication(mockData);
    };

    fetchApplication();
  }, [applicationId]);

  const downloadFile = (url) => {
    window.open(url, '_blank');
  };

  if (!application) return <p>Cargando postulación...</p>;

  return (
    <Container className="my-5">
      <Card className="p-4">
        <h4 className="mb-3">Detalle de la Postulación</h4>
        <p><strong>Postulante:</strong> {application.applicantName}</p>
        <p><strong>Oferta:</strong> {application.jobTitle}</p>
        <p><strong>Fecha de postulación:</strong> {application.createdAt}</p>
        <hr />
        <Row>
          <Col md={6}><strong>Nivel de estudios:</strong><br />{application.education}</Col>
          <Col md={6}><strong>Disponibilidad:</strong><br />{application.availability}</Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}><strong>Expectativa salarial:</strong><br />${application.salary.toLocaleString()}</Col>
          <Col md={6}><strong>Habilidades:</strong><br />{application.skills}</Col>
        </Row>
        <div className="mt-3"><strong>Experiencia laboral:</strong><br />{application.experience}</div>
        <div className="mt-3"><strong>Carta de presentación:</strong><br />{application.coverLetter || 'No enviada'}</div>

        <div className="mt-4">
          <strong>Hoja de Vida:</strong><br />
          <Button variant="outline-primary" onClick={() => downloadFile(application.cvUrl)}>Descargar CV</Button>
        </div>
      </Card>
    </Container>
  );
};

export default ApplicationDetail;
