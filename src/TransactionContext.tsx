import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./components/services/axios";


interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
interface TransactionsProviderProps{
  children: ReactNode
}
interface TransactionsContextData{
  transactions: Transactions[];
  createTransaction : (transaction: Transactions)=>void;
}
type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  )
export function TransactionProvider({children}:TransactionsProviderProps){
  const [transactions, setTransaction] = useState<Transactions[]>([]);
  useEffect(() => {
    api.get("transactions")
      .then((response) => setTransaction(response.data.transactions));
  }, []);
  function createTransaction(transaction: TransactionInput){
    api.post('/transactions', transaction)
}
     return(
       <TransactionContext.Provider value={{transactions,createTransaction}} >
         {children}
       </TransactionContext.Provider>
     )
  }
  