import { Reactify } from '@vueuse/shared';
declare type PrependArgument<Fn, E> = Fn extends (...args: infer R) => infer T ? (that: E, ...args: R) => T : never;
export declare function reactifyMethod<T extends Function>(fn: T): Reactify<PrependArgument<T, any>>;
export declare const reactifyString: <T extends Function>(fn: T) => Reactify<PrependArgument<T, string>>;
export declare const reactifyNumber: <T extends Function>(fn: T) => Reactify<PrependArgument<T, number>>;
export {};
