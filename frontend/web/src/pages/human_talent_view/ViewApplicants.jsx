import { useState, useEffect } from 'react';
import { Container, Table, Form } from 'react-bootstrap';

const postuladosEjemplo = [
  { id: 1, nombre: 'Ana Gómez', oferta: 'Frontend', fecha: '2025-07-01', documento: '12345' },
  { id: 2, nombre: 'Luis Ríos', oferta: 'Backend', fecha: '2025-07-03', documento: '67890' }
];

const VerPostulados = () => {
  const [postulados, setPostulados] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    setPostulados(postuladosEjemplo); // Reemplazar por fetch real
  }, []);

  const filtrados = postulados.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.oferta.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Postulados</h2>

      <Form.Control
        placeholder="Filtrar por nombre u oferta..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="mb-3"
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Oferta</th>
            <th>Fecha</th>
            <th>Documento</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map(p => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.oferta}</td>
              <td>{p.fecha}</td>
              <td>{p.documento}</td>
              <td>
                <a href={`/applicant/application-detail/${p.id}`}>Ver detalle</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default VerPostulados;
