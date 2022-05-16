import { useState,FormEvent,useContext } from 'react';
import Modal from 'react-modal'
import { api } from '../services/axios';

import imgClose from '../../assets/close.svg'
import incomeIMG from '../../assets/income.svg'
import outcomeIMG from '../../assets/outcome.svg'
import { TransactionContext } from '../../TransactionContext';

import { Container, TransactionsTypeButton, TypeBox } from './styles';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () =>void;
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const {createTransaction} = useContext(TransactionContext);

  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState(0);
  const [category ,setCategory ] = useState('');
  const [type,setType] = useState('deposit');

  function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault()

     createTransaction({
  title,
  amount,
  category,
  type,
  id: 0,
  createdAt: ''
})
  
  }
  return(

  <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button 
        type='button'
        onClick={onRequestClose}
        className='react-modal-button'
         >
          <img src={imgClose} alt="Fechar Modal"  />
        </button>
       <Container onSubmit={handleCreateNewTransaction}>
         <h2>Cadastrar Transação </h2>
         <input 
        placeholder="Titulo"
        value={title} 
        onChange={( event =>setTitle((event.target.value)))}
         />
         <input
        type="number"
        placeholder="Valor" 
        value={amount} 
        onChange={( event =>setAmount(Number(event.target.value)))}     
         />
         <TransactionsTypeButton>
           <TypeBox 
             onClick={()=>setType('deposit')}
             isActive={type === 'deposit'}
             isActiveColors='green'
             >
             <img src={incomeIMG} alt="Entradas"/>
             <span>
               Entrada
             </span>
           </TypeBox>
           <TypeBox
           onClick={()=>setType('withdraw')}
           isActive={type === 'withdraw'}
           isActiveColors='red'
           >
             <img src={outcomeIMG} alt="Saida"/>
             <span>
                Saida
             </span>
           </TypeBox>
         </TransactionsTypeButton>
         <input 
         placeholder="Categoria"
         value={category} 
         onChange={( event =>setCategory((event.target.value)))}    
         />
         <button type='submit'>
           Cadastrar
         </button>
       </Container>
      </Modal>
  )
}