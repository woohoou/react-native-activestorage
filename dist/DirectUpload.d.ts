import { ReactNode } from 'react';
import useDirectUpload, { Params } from './useDirectUpload';
declare type Props = {
    children: (data: ReturnType<typeof useDirectUpload>) => ReactNode;
} & Params;
declare const DirectUpload: ({ children, onSuccess, onError }: Props) => ReactNode;
export default DirectUpload;
