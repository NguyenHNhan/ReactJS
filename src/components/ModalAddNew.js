import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postCrUser } from "../services/UserService";
import { toast } from 'react-toastify';
const ModalAddNew = (props) => {
    const { show, handleClose } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const handleSaveUser = async () => {
        let res = await postCrUser(name, job);
        if (res && res.id){
            handleClose();
            setName("");
            setJob("");
            toast.success("Thanh Cong");
        }else {
            toast.error("!!!!!!!!!!!");

        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Job</label>
                            <input type="password" className="form-control" value={job} onChange={(event) => setJob(event.target.value)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ () => handleSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}
export default ModalAddNew;