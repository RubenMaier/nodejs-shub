import { keyValueString, keyValueAny } from "./interfaces";
export declare const generatePostRequest: (url: string, params: any, headers: keyValueString) => Promise<any>;
export declare const generateGetRequest: (base_url: string, headers: keyValueString, requiered_params: keyValueAny, others_params?: keyValueAny) => Promise<any>;
export declare const isNullOrUndefined: (value: any) => boolean;
//# sourceMappingURL=utils.d.ts.map