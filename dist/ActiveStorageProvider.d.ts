import React from 'react';
declare type Headers = {
    [key: number]: string;
};
declare type Props = {
    host: string;
    mountPath?: string;
    headers?: Headers;
};
declare const ActiveStorageProvider: React.FC<Props>;
export default ActiveStorageProvider;
