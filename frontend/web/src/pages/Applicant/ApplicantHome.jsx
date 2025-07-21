import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FileEdit, ClipboardList, Pencil } from "lucide-react";

const ApplicantHome = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Postularse",
      description: "Completa el formulario para aplicar a una oferta",
      icon: <FileEdit size={40} className="mb-2 text-success" />,
      buttonText: "Ir al formulario",
      variant: "success",
      path: "/ApplicationForm",
    },
    {
      title: "Mis Postulaciones",
      description: "Consulta y gestiona tus postulaciones anteriores",
      icon: <ClipboardList size={40} className="mb-2 text-primary" />,
      buttonText: "Ver postulaciones",
      variant: "primary",
      path: "/applicant/applications",
    },
    {
      title: "Editar Perfil",
      description: "Aquí puedes editar y actualizar tu información personal",
      icon: <Pencil size={40} className="mb-2 text-warning" />,
      buttonText: "Editar perfil",
      variant: "warning",
      path: "/edit-applicant/1",
    },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5">Panel del Postulante</h2>
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

export default ApplicantHome;
