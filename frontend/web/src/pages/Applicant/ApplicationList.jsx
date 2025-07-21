import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Datos de ejemplo
    const dummyApplications = [
      {
        id: 1,
        jobTitle: 'Desarrollador Frontend',
        company: 'Tech Solutions',
        appliedAt: '2025-07-10',
        status: 'En revisión',
        cancelDeadline: '2025-07-20',
      },
      {
        id: 2,
        jobTitle: 'Analista de Datos',
        company: 'DataCorp',
        appliedAt: '2025-06-25',
        status: 'Rechazada',
        cancelDeadline: '2025-07-01',
      },
      {
        id: 3,
        jobTitle: 'Diseñador UI/UX',
        company: 'Creativa Studio',
        appliedAt: '2025-07-12',
        status: 'Aceptada',
        cancelDeadline: '2025-07-22',
      },
    ];
    setApplications(dummyApplications);
  }, []);

  const handleCancel = (id) => {
    const updated = applications.map(app =>
      app.id === id ? { ...app, status: 'Cancelada' } : app
    );
    setApplications(updated);
    alert('Postulación cancelada');
  };

  const isCancelable = (cancelDeadline, status) => {
    const today = new Date();
    return new Date(cancelDeadline) > today && status !== 'Cancelada';
  };

  return (
    <Container className="my-5">
      <h3 className="mb-4">Mis Postulaciones</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Oferta</th>
            <th>Empresa</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.jobTitle}</td>
              <td>{app.company}</td>
              <td>{app.appliedAt}</td>
              <td>
                <Badge
                  bg={
                    app.status === 'Aceptada'
                      ? 'success'
                      : app.status === 'Rechazada'
                      ? 'danger'
                      : app.status === 'Cancelada'
                      ? 'secondary'
                      : 'warning'
                  }
                >
                  {app.status}
                </Badge>
              </td>
              <td>
                {isCancelable(app.cancelDeadline, app.status) ? (
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleCancel(app.id)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() =>
                        navigate(`/applicant/applications/edit-aplication/${app.id}`)
                      }
                    >
                      Editar
                    </Button>
                  </div>
                ) : (
                  <span style={{ color: 'gray' }}>No disponible</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ApplicationList;
