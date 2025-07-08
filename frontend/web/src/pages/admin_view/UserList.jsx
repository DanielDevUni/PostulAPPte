import React, {useState, useEffect} from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const postulantesData = [
  {
    id: 1,
    name: "Juan",
    surname: "Pérez",
    username: "juanp",
    birthdate: "1990-05-12",
    address: "Calle 123",
    phone: "601234567",
    cellphone: "3012345678",
    status: "activo",
    typeDocument: "C.C",
    documentId: "12345678",
    gender: "Masculino",
    email: "juan@example.com",
    role: "postulante"
  },
  {
    id: 3,
    name: "Carlos",
    surname: "López",
    username: "carlosl",
    birthdate: "1992-09-03",
    address: "Carrera 45",
    phone: "604567890",
    cellphone: "3156781234",
    status: "activo",
    typeDocument: "C.C",
    documentId: "87654321",
    gender: "Masculino",
    email: "carlos@example.com",
    role: "postulante"
  }
];

const UserList = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (confirm) {
      const updatedUsers = users.filter((u) => u.id !== id);
      setUsers(updatedUsers);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredUsers = users.filter(
    (u) =>
      u.role === "postulante" &&
      u.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.gender ? u.gender === filters.gender : true) &&
      (filters.status ? u.status === filters.status : true)
  );


  return (
    <Container className="my-4">
      <h3>Lista de Postulantes</h3>

      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <Form.Control
              name="name"
              placeholder="Nombre"
              value={filters.name}
              onChange={handleFilterChange}
            />
          </Col>
          <Col md={4}>
            <Form.Select name="gender" value={filters.gender} onChange={handleFilterChange}>
              <option value="">Todos los géneros</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select name="status" value={filters.status} onChange={handleFilterChange}>
              <option value="">Todos los estados</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name} {user.surname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(user.id)}>
                  Editar
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;