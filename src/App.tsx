import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactionContext';


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
    <TransactionsProvider >
    <Header 
    openNewTransactionModal={handleClickOpenModal} 
    />
    <NewTransactionModal 
    isOpen={isOpenNewTransactionModal} 
    onRequestClose={handleClickCloseModal}
    />
     <Dashboard/>
     <GlobalStyle/>
    </TransactionsProvider>
  );
}

