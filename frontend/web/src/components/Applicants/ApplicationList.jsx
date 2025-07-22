import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyApplications = [
      {
        id: 1,
        jobTitle: 'Desarrollador Frontend',
        company: 'Tech Solutions',
        appliedAt: '2025-07-10',
        status: 'En revisión',
        cancelDeadline: '2025-07-30',
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

  const handleDelete = (id) => {
    const confirm = window.confirm('¿Deseas eliminar esta postulación?');
    if (confirm) {
      const updated = applications.filter(app => app.id !== id);
      setApplications(updated);
      alert('Postulación eliminada');
    }
  };

  const isCancelable = (cancelDeadline, status) => {
    const today = new Date();
    return new Date(cancelDeadline) > today && status !== 'Cancelada';
  };

  const statusBadge = (status) => {
    const colorMap = {
      'Aceptada': 'success',
      'Rechazada': 'danger',
      'Cancelada': 'secondary',
      'En revisión': 'warning'
    };

    return (
      <span className={`badge badge-custom bg-${colorMap[status] || 'primary'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 title-custom">Mis Postulaciones</h2>
      <div className="row">
        {applications.map((app) => (
          <div key={app.id} className="col-md-12 mb-3">
            <div className="card h-100 card-custom shadow-sm">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <p className="desc-custom mb-1">Oferta:</p>
                    <span>{app.jobTitle}</span>
                  </div>
                  <div className="col-md-3">
                    <p className="desc-custom mb-1">Empresa:</p>
                    <span>{app.company}</span>
                  </div>
                  <div className="col-md-2">
                    <p className="desc-custom mb-1">Fecha:</p>
                    <span>{app.appliedAt}</span>
                  </div>
                  <div className="col-md-2">
                    <p className="desc-custom mb-1">Estado:</p>
                    {statusBadge(app.status)}
                  </div>
                  <div className="col-md-2 d-flex align-items-center">
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
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(app.id)}
                      >
                        Eliminar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
