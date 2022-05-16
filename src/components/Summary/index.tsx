
import React,{useContext} from 'react';
import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg';
import totalIMG from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionContext';
import { Container } from './styles';

export function Summary(){
  const data = useContext(TransactionContext)
  console.log(data)
return(
<Container>
<div>
  <header>
  <p>
    Entradas
  </p>
  <img src={incomeIMG} alt="Entradas" />
  </header>
  <strong>
  R$:1500,00
  </strong>
</div>
<div>
  <header>
  <p>
   Retiradas
  </p>
  <img src={outcomeIMG} alt="Retiradas" />
  </header>
  <strong>
  R$:-500,00
  </strong>
</div>
<div className='highlight-background'>
  <header>
  <p>
    Total
  </p>
  <img src={totalIMG} alt="total" />
  </header>
  <strong>
  R$:1000,00
  </strong>
</div>
</Container>
  )
}