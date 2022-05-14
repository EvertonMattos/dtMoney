import { useState } from 'react'
import logoImg from'../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

interface onOpenNewTransctionModal{
  openNewTransactionModal: ()=>void;
}
export function Header({openNewTransactionModal}:onOpenNewTransctionModal){

  return(
    <Container>
      <Content>
     <img src={logoImg} alt="dt Money" />
     <button type="button" onClick={openNewTransactionModal}>
       Nova Transação 
     </button>
    
      </Content>
    </Container>
  )
}