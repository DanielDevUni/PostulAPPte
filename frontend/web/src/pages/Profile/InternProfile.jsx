import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";

const sampleData = {
  name: "Usuario",
  surname: "Apellido",
  username: "usuario123",
  birthdate: "1987-08-13",
  address: "Calle Falsa 123",
  phone: "6023705501",
  cellphone: "3155144002",
  typeDocument: "C.C",
  rol: "Administrador",
  documentId: "1144100105",
  gender: "Femenino",
  email: "usuario@gmail.com",
};

const UserProfile = () => {
  const [formData, setFormData] = useState(sampleData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchUser = async () => {
        try {
          const res = await fetch("/api/user/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            setFormData(data);
          }
        } catch (err) {
          console.error("Error al obtener los datos del usuario:", err);
        }
      };

      fetchUser();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isEmpty = (value) => !value || value.trim() === "";
  const isNumeric = (value) => /^\d+$/.test(value);

  const validateForm = (data) => {
    for (let key in data) {
      if (isEmpty(data[key])) {
        return "Por favor completa todos los campos.";
      }
    }
    if (!isNumeric(data.documentId) || data.documentId.length < 6) {
      return "El número de documento debe ser numérico y tener al menos 6 dígitos.";
    }
    if (!isNumeric(data.phone) || data.phone.length < 7) {
      return "El número de teléfono debe ser numérico y válido.";
    }
    if (!isNumeric(data.cellphone) || data.cellphone.length < 7) {
      return "El número de celular debe ser numérico y válido.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm(formData);
    if (error) return alert(error);

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await fetch("/api/user/me", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          alert("Datos actualizados correctamente.");
        } else {
          alert("Error al actualizar los datos.");
        }
      } catch (err) {
        alert("Error de red al actualizar datos.");
      }
    } else {
      alert("Debes iniciar sesión para guardar los cambios.");
    }
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Container className="my-4">
      <Card className="p-3 shadow-sm">
        <Row className="align-items-center mb-4">
          <Col md={2} className="text-center">
            <FaUserCircle size={80} className="text-primary" />
          </Col>
          <Col md={6}>
            <h5 className="mb-0">{formData.name} {formData.surname}</h5>
            <small className="text-muted">Usuario: {formData.username}</small>
            <div className="mt-2 d-flex gap-3">
              <FaFacebookF className="text-secondary" />
              <FaGithub className="text-secondary" />
              <FaLinkedinIn className="text-secondary" />
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-end gap-3">
            <Card className="text-center p-2 w-50 bg-light border-0">
              <div className="fw-bold fs-5 text-primary">7</div>
              <small className="text-muted">Citaciones y Entrevistas</small>
            </Card>
            <Card className="text-center p-2 w-50 bg-light border-0">
              <div className="fw-bold fs-5 text-primary">42</div>
              <small className="text-muted">Postulaciones Realizadas</small>
            </Card>
          </Col>
        </Row>

        {!isLoggedIn && (
          <div className="alert alert-warning text-center">
            Estás viendo un perfil de muestra. Inicia sesión para ver o editar tus datos reales.
          </div>
        )}

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Tipo de Documento</Form.Label>
                <Form.Select name="typeDocument" value={formData.typeDocument} onChange={handleChange} disabled={!isLoggedIn}>
                  <option>C.C</option>
                  <option>T.I</option>
                  <option>Pasaporte</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Número de Documento</Form.Label>
                <Form.Control type="text" name="documentId" value={formData.documentId} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Género</Form.Label>
                <Form.Select name="gender" value={formData.gender} onChange={handleChange} disabled={!isLoggedIn}>
                  <option>Femenino</option>
                  <option>Masculino</option>
                  <option>Otro</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Celular</Form.Label>
                <Form.Control type="text" name="cellphone" value={formData.cellphone} onChange={handleChange} readOnly={!isLoggedIn} />
              </Form.Group>
            </Col>
          </Row>

          {isLoggedIn && (
            <div className="text-center">
              <Button variant="primary" className="px-5" type="submit">
                Actualizar Datos
              </Button>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default UserProfile;