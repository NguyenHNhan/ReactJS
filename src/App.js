import Container from 'react-bootstrap/esm/Container';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/Tableuser';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [isShowModal, setIsShowModal] = useState(false)
  const handleClose = () => {
    setIsShowModal(false);
  }
  return (
    <>

      <div className='app-container'>
        <Header />
        <Container>
          <div className='my-3 d-flex justify-content-between'>
            <span>List Users:</span>
            <button className='btn btn-dark' onClick={() => setIsShowModal(true)}>Add New User</button>
          </div>
          <TableUsers />
        </Container>
        <ModalAddNew
          show={isShowModal}
          handleClose={handleClose}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
     
/>

    </>
  );
}

export default App;
