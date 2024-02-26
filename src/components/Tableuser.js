import { useEffect, useState } from 'react';
import { fechAllUser } from '../services/UserService';
import Table from 'react-bootstrap/Table';

import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {
    const [listusers, setlistusers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getUser(1);
    }, [])
    const getUser = async (page) => {
        let res = await fechAllUser(page);
        if (res && res.data) {
            setTotalPages(res.total_pages)
            setTotalUsers(res.total)
            setlistusers(res.data)
        }
    }

    const handlePageClick = (event) => { 
        getUser(+event.selected+1)
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
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}

            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
    </>)
}
export default TableUsers;