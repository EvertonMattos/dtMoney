import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer,Model} from 'miragejs'
import {App} from './App';

createServer({
  models:{
    transactions:Model,
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title:'Freelance de Website',
          type:'deposit',
          amount:6085,
          category:"venda",
          createdAt: new Date('2014-01-07 09:00:00'),
        },{
          id: 2,
          title:'Aluguel',
          type:'withdraw',
          amount:1085,
          category:"Compra",
          createdAt: new Date('2014-01-07 09:00:00'),
        }


      ]
    })
  },
  routes(){
    this.namespace ='api';
    this.get('/transactions',()=>{
      return this.schema.all('transactions');
    })
    this.post('/transactions',(scheme,request)=>{
      const data = JSON.parse(request.requestBody)
      return data
    })
}
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
