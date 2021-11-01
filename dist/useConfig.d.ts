declare const useConfig: () => {
    mountPath: string;
    directUploadsUrl: string;
    host: string;
    headers?: {
        [key: number]: string;
    } | undefined;
};
export default useConfig;
