import { darken,transparentize } from 'polished';
import styled  from 'styled-components';

export const Container = styled.form`
h2{
  color: var(--text-title);
  font-size:1.5rem;
  margin-bottom:2rem;
}
input{
  width: 100%;
  padding:0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size:1rem;
  margin-top:1rem;
}
&::placeholder{
  color: var(--text-body);
  
}
button[type="submit"]{
  width: 100%;
  padding:0 1.5rem;
  height: 4rem;
  background: var(--green);
  color:#fff;
  border-radius: 0.25rem;
  border:0;
  font-size: 1rem;
  margin-top:1.5rem;
  font-weight: 600;
  transition: filter 0.5s ease-in;
  &:hover{
    filter:brightness(0.9);
  }
}
`

export const TransactionsTypeButton = styled.div`
margin:1rem 0;
display:grid;
grid-template-columns: 1fr 1fr;
gap: .5rem;

`
interface TypeBoxProps{
  isActive: boolean;
  isActiveColors: 'red' | 'green' ;
}
const colors =
{
green: '#33CC95',
red:'#E50E40'
}
export const TypeBox = styled.button<TypeBoxProps>`
height:4rem;
border:1px solid #d7d7d7;
border-radius: .25rem;

background: ${(props)=> props.isActive ?  transparentize(0.9, colors[props.isActiveColors]): 'transparent'};
display:flex;
align-items:center;
justify-content:center;
&:hover{
  border-color: ${darken(0.1, '#d7d7d7')} ;
}
img{
  width:20px;
  height:20px;
}
span{
  display: inline-block;
  margin-left:0.5rem;
  color:var(--text-title);
  font-size: 1rem;
}
`