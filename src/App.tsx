import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';


Modal.setAppElement('#root');
export function App() {
  const [isOpenNewTransactionModal,setIsOpenNewTransactionModal] =useState(false);

  function handleClickOpenModal(){
    return setIsOpenNewTransactionModal(true)
  }
  function handleClickCloseModal(){
    return setIsOpenNewTransactionModal(false)

  }
  return (
    <>
    <Header openNewTransactionModal={handleClickOpenModal} />
    <Modal
        isOpen={isOpenNewTransactionModal}
        onAfterOpen={handleClickOpenModal}
        onRequestClose={handleClickCloseModal}
      >
        <h1>hellow</h1>
      </Modal>
     <Dashboard/>
     <GlobalStyle/>
    </>
  );
}

