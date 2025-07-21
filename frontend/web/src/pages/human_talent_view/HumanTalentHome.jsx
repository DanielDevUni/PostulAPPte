import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, FilePlus } from 'lucide-react';

const HumanTalentHome = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Registrar Oferta',
      description: 'Publica una nueva oferta laboral',
      icon: <FilePlus size={40} className="mb-2 text-primary" />,
      buttonText: 'Ir al formulario',
      variant: 'primary',
      path: '/human-talent/register-job-offer',
    },
    {
      title: 'Ver Postulantes',
      description: 'Consulta los candidatos registrados',
      icon: <Users size={40} className="mb-2 text-secondary" />,
      buttonText: 'Ver postulantes',
      variant: 'secondary',
      path: '/human-talent/view-applicants',
    },
    {
      title: 'Ver Ofertas',
      description: 'Revisa y edita las ofertas existentes',
      icon: <Briefcase size={40} className="mb-2 text-info" />,
      buttonText: 'Ver ofertas',
      variant: 'info',
      path: '/human-talent/view-offers',
    },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5">Panel de Talento Humano</h2>
      <Row className="g-4 justify-content-center">
        {sections.map((section, idx) => (
          <Col key={idx} md={4}>
            <Card className="text-center shadow rounded-4 border-0 h-100">
              <Card.Body>
                {section.icon}
                <Card.Title className="mb-2">{section.title}</Card.Title>
                <Card.Text className="mb-3 text-muted">{section.description}</Card.Text>
                <Button
                  variant={section.variant}
                  onClick={() => navigate(section.path)}
                >
                  {section.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HumanTalentHome;
