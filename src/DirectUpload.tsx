import { ReactNode } from 'react';
import useDirectUpload, { Params } from './useDirectUpload';

type Props = {
  children: (data: ReturnType<typeof useDirectUpload>) => ReactNode;
} & Params;

const DirectUpload = ({ children, onSuccess, onError }: Props) => {
  const data = useDirectUpload({ onSuccess, onError });

  return children(data);
};

export default DirectUpload;
