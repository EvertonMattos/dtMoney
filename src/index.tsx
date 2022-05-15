import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer,Model} from 'miragejs'
import {App} from './App';

createServer({
  models:{
    transactions:Model,
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
