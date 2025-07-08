import React, {useState, useEffect} from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const adminTalentoData = [
  {
    id: 2,
    name: "Ana",
    surname: "Gómez",
    username: "anag",
    birthdate: "1988-01-22",
    address: "Av. Siempre Viva",
    phone: "601112233",
    cellphone: "3124567890",
    status: "activo",
    typeDocument: "C.C",
    documentId: "11112222",
    gender: "Femenino",
    email: "ana@example.com",
    role: "admin"
  },
  {
    id: 4,
    name: "Laura",
    surname: "Torres",
    username: "laurat",
    birthdate: "1995-03-14",
    address: "Calle 99",
    phone: "602223344",
    cellphone: "3198765432",
    status: "activo",
    typeDocument: "C.E",
    documentId: "33334444",
    gender: "Femenino",
    email: "laura@example.com",
    role: "talento_humano"
  }
];

const InternUserList = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <Container className="my-4">
      <h3 className="mb-3">Lista de Administradores y Talento Humano</h3>
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
          {adminTalentoData.map((user) => (
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

export default InternUserList;

