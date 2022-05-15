import { useState } from 'react';
import Modal from 'react-modal'
import imgClose from '../../assets/close.svg'
import incomeIMG from '../../assets/income.svg'
import outcomeIMG from '../../assets/outcome.svg'
import { Container, TransactionsTypeButton, TypeBox } from './styles';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () =>void;
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
  const [type,setType] = useState('deposit');
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
       <Container>
         <h2>Cadastrar Transação </h2>
         <input placeholder="Titulo"        
         />
         <input
         type="number"
          placeholder="Valor"        
         />
         <TransactionsTypeButton>
           <TypeBox 
             onClick={()=>setType('deposit')}
             isActive={type === 'deposit'}
             >
             <img src={incomeIMG} alt="Entradas"/>
             <span>
               Entrada
             </span>
           </TypeBox>
           <TypeBox
           onClick={()=>setType('withdraw')}
           isActive={type === 'withdraw'}
           >
             <img src={outcomeIMG} alt="Saida"/>
             <span>
                Saida
             </span>
           </TypeBox>
         </TransactionsTypeButton>
         <input 
         placeholder="Categoria"
         />
         <button type='submit'>
           Cadastrar
         </button>
       </Container>
      </Modal>
  )
}