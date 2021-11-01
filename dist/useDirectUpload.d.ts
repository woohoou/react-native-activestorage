import { File, DirectUploadResult } from './types';
interface OnSuccessParams {
    signedIds: string[];
}
export declare type Params = {
    onSuccess?: (params: OnSuccessParams) => void;
    onError?: (params: unknown) => void;
};
declare const useDirectUpload: ({ onSuccess, onError }?: Params) => {
    upload: (files: File[]) => Promise<{
        signedIds: string[];
    } | {
        signedIds?: undefined;
    }>;
    uploads: DirectUploadResult[];
    uploading: boolean;
};
export default useDirectUpload;
