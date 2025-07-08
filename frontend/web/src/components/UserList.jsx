import { useEffect, useState } from 'react';
import { getUsers } from '../api/user';

import { EmojiFrown } from 'react-bootstrap-icons';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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
                            <div className="card-header">{user.name}</div>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">{user.lastname}</p>
                                <span className="badge bg-dark">
                                    ${user.document}
                                </span>
                                <span className="badge bg-primary">{user.email}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}