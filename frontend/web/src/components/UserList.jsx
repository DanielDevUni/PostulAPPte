import { useEffect, useState } from 'react';
import { getUsers } from '../api/user';

export default function OfferList() {
    const [users, setUsers] = useState([])
    const loadUsers = async () => {
        const response = await getUsers()
        setUsers(response.data)
    }
    
    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div>UserList</div>
    )
}