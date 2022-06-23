"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withCtx = exports.withCtxAwait = exports.createCtxAwait = exports.createCtx = void 0;
const createCtx = (prop, fn) => ({
    [prop]: fn()
});
exports.createCtx = createCtx;
const createCtxAwait = (prop, fn) => fn().then(x => ({ [prop]: x }));
exports.createCtxAwait = createCtxAwait;
const withCtxAwait = (prop, fn) => (ctx) => {
    const r = fn(ctx);
    return r instanceof Promise ? promiseReturn(r) : nonPromiseReturn(r);
    function promiseReturn(r) {
        return r.then((x) => (Object.assign(Object.assign({}, ctx), { [prop]: x })));
    }
    function nonPromiseReturn(r) {
        return Promise.resolve(Object.assign(Object.assign({}, ctx), { [prop]: r }));
    }
};
exports.withCtxAwait = withCtxAwait;
const withCtx = (prop, fn) => (ctx) => (Object.assign(Object.assign({}, ctx), { [prop]: fn(ctx) }));
exports.withCtx = withCtx;
//# sourceMappingURL=with-context.js.map