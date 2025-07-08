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

  return (
    <Container className="my-4">
      <h3 className="mb-3">Lista de Postulantes</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {postulantesData.map((user) => (
            <tr key={user.id}>
              <td>{user.name} {user.surname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(user.id)}>
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

export default UserList;