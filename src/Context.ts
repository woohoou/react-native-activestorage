import { createContext } from 'react';

type Headers = {
  [key: number]: string;
}

type ContextType = {
  host: string;
  mountPath?: string;
  headers?: Headers;
}

const defaultContext = {
  host: 'http://localhost:3000',
  mountPath: '/rails/active_storage',
  headers: {}, 
};

export const Context = createContext<ContextType>(defaultContext);
export const { Consumer, Provider } = Context;

export default Context;
