import { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ViewOffers = () => {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //ñe
    const dummyOffers = [
      {
        id: 1,
        name: 'Desarrollador Frontend',
        level: 'Junior',
        title: 'Frontend Developer',
        salary: 3000000,
        date_start: '2025-07-01',
        date_finish: '2025-12-31',
        status: true,
      },
      {
        id: 2,
        name: 'Analista de Datos',
        level: 'Senior',
        title: 'Data Analyst',
        salary: 5000000,
        date_start: '2025-08-01',
        date_finish: '2025-11-30',
        status: false,
      },
    ];

    setOffers(dummyOffers);
  }, []);

  const handleEdit = (id) => {
    navigate(`/human-talent/edit-job-offer/${id}`);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Lista de Ofertas Registradas</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nivel</th>
            <th>Título</th>
            <th>Salario</th>
            <th>Inicio</th>
            <th>Finalización</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.name}</td>
              <td>{offer.level}</td>
              <td>{offer.title}</td>
              <td>${offer.salary.toLocaleString()}</td>
              <td>{offer.date_start}</td>
              <td>{offer.date_finish}</td>
              <td>{offer.status ? 'Activa' : 'Inactiva'}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleEdit(offer.id)}>
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewOffers;
