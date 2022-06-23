export declare const createCtx: <R>(prop: string, fn: () => R) => {
    [x: string]: R;
};
export declare const createCtxAwait: <P, R>(prop: keyof P, fn: () => Promise<R>) => Promise<Record<keyof P, R>>;
export declare const withCtxAwait: <Cout, Cin, R>(prop: keyof Cout, fn: (ctx: Cin) => R | PromiseLike<R>) => (ctx: Cin) => PromiseLike<Cin & Record<keyof Cout, R>>;
export declare const withCtx: <X, T, R>(prop: keyof X, fn: (v: T) => R) => (ctx: T) => T & Record<keyof X, R>;
//# sourceMappingURL=with-context.d.ts.map