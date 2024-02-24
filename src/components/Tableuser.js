import { useEffect, useState } from 'react';
import { fechAllUser } from '../services/UserService';
import Table from 'react-bootstrap/Table';
const TableUsers = (props) => {
    const [listusers, setlistusers] = useState([]);
    useEffect(() => {
        getUser();
    }, [])
    const getUser = async () => {
        let res = await fechAllUser();
        if (res && res.data && res.data.data) {
            setlistusers(res.data.data)
        }
    }
    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {listusers && listusers.length > 0 &&
                    listusers.map((item, index) => {
                        return (
                            <tr key={`users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
    </>)
}
export default TableUsers;