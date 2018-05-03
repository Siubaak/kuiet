export declare function defineProperty(obj: Object, key: string, value: any, enumerable?: boolean): void;
export declare function hasOwnProperty(obj: Object, key: string): boolean;
export declare const is: {
    undefined: (val: any) => boolean;
    null: (val: any) => boolean;
    number: (val: any) => boolean;
    string: (val: any) => boolean;
    boolean: (val: any) => boolean;
    symbol: (val: any) => boolean;
    object: (val: any) => boolean;
    array: (val: any) => boolean;
    function: (val: any) => boolean;
};
