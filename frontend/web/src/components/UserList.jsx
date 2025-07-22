import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/user';
import { Button, Modal, Alert } from 'react-bootstrap';

import { EmojiFrown } from 'react-bootstrap-icons';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const loadUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error loading offers:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers()
    }, []);

    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        try {
            await deleteUser(userToDelete.user_id);
            setUsers(users.filter(user => user.user_id !== userToDelete.user_id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("No se pudo eliminar el usuario");
        }
    };

    if (loading) {
        return <div className="text-center my-5">Loading users...</div>;
    }

    if (users.length === 0) {
        return (
            <div className="container mt-4">
                <Alert variant="primary" className="d-flex align-items-center">
                    <EmojiFrown className="me-2" size={24} />
                    <div>
                        <h4 className="alert-heading">¡No hay usuarios registrados!</h4>
                        <p className="mb-0">No se encontraron usuarios registrados en este momento.</p>
                    </div>
                </Alert>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Usuarios Registrados</h2>
            <div className="row">
                {users.map(user => (
                    <div key={user.user_id} className="col-md-6 mb-4">
                        <div className="card h-100 card-custom">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span>{user.name} {user.lastname}</span>
                                <Button 
                                    variant="danger" 
                                    size="sm"
                                    onClick={() => handleDeleteClick(user)}
                                    className="btn-custom-danger"
                                >
                                    Eliminar
                                </Button>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    <strong>Documento:</strong> {user.document}
                                </p>
                                <p className="card-text">
                                    <strong>Email:</strong> {user.email}
                                </p>
                                <div className="mt-2">
                                    <span className="badge bg-dark me-2">ID: {user.user_id}</span>
                                    {user.role && <span className="badge bg-primary">{user.role}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de confirmación para eliminar */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title>Confirmar Eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro que deseas eliminar al usuario {userToDelete?.name} {userToDelete?.lastname}?
                    <br />
                    <small className="text-muted">Esta acción no se puede deshacer.</small>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDelete} className="btn-custom-danger">
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}