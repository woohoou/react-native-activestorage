import React from 'react';
import { Provider } from './Context';

type Headers = {
  [key: number]: string;
}

type Props = {
  host: string;
  mountPath?: string;
  headers?: Headers;
}

const ActiveStorageProvider: React.FC<Props> = ({ host, mountPath, headers, children }) => (
  <Provider value={{ host, mountPath, headers }}>{children}</Provider>
);

export default ActiveStorageProvider;
