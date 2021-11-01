/// <reference types="react" />
declare type Headers = {
    [key: number]: string;
};
declare type ContextType = {
    host: string;
    mountPath?: string;
    headers?: Headers;
};
export declare const Context: import("react").Context<ContextType>;
export declare const Consumer: import("react").Consumer<ContextType>, Provider: import("react").Provider<ContextType>;
export default Context;
