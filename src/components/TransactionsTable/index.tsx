import { useState } from "react";
import { api } from "../services/axios";
import { Container } from "./styles";

export function TransactionsTable(){
useState(()=>{
  api.get('transactions')
  .then(response =>  console.log(response.data))
})
 
return(
  <Container> 
    <table>
      <thead>
        <tr>
        <th> Titulo</th>
        <th>Preço</th>
        <th>Categoria</th>
        <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desevolvimento de site</td>
          <td className="deposit">R$:2500</td>
          <td>Venda</td>
          <td>05/02/2005</td>
        </tr>
        <tr>
          <td>Desevolvimento de site</td>
          <td className="windrow">R$:-2500</td>
          <td>Venda</td>
          <td>09/02/2005</td>
        </tr>
      </tbody>
    </table>
  </Container>
)
}