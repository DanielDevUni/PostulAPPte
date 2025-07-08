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
        <h3 className="mb-3">Lista de Administradores y Talento Humano</h3>

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
                    <Form.Select name="role" value={filters.role} onChange={handleFilterChange}>
                        <option value="">Todos los roles</option>
                        <option value="admin">Administrador</option>
                        <option value="talento_humano">Talento Humano</option>
                    </Form.Select>
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
                {minTalentoData.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name} {user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <Button variant="warning" size="sm" onClick={() => handleEdit(user.id)}>
                            Editar
                            </Button>
                            <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                            Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}ad
            </tbody>
        </Table>
    </Container>
    );
};

export default InternUserList;

