"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const with_context_1 = require("./with-context");
const chai_1 = require("chai");
const monet_1 = require("monet");
describe('with-context', () => {
    it('should work with generic types', () => {
        (0, monet_1.Some)({ a: 1 })
            .map((0, with_context_1.withCtx)('b', () => ({ foo: 10 })))
            .map((0, with_context_1.withCtx)('c', () => ({ bar: 20 })));
        return Promise.resolve({ a: 1 })
            .then((0, with_context_1.withCtxAwait)('b', () => Promise.resolve({ foo: { bar: 10 } })))
            .then((0, with_context_1.withCtxAwait)('c', () => Promise.resolve(3)));
    });
    it('should work in a promise context', () => {
        return Promise.resolve({ a: 1 })
            .then((0, with_context_1.withCtxAwait)('b', ctx => Promise.resolve(ctx.a + 1)))
            .then((0, with_context_1.withCtxAwait)('c', ctx => Promise.resolve(ctx.b.toString())))
            .then((0, with_context_1.withCtxAwait)('d', () => Promise.resolve(10)))
            .then(x => (0, chai_1.expect)(x).to.deep.equal({ a: 1, b: 2, c: "2", d: 10 }));
    });
    it('should work in a non promise context', () => {
        (0, monet_1.Some)({ a: 1 })
            .map((0, with_context_1.withCtx)('b', ctx => ctx.a + 1))
            .map((0, with_context_1.withCtx)('c', ctx => ctx.b.toString()))
            .forEach(x => (0, chai_1.expect)(x).to.deep.equal({ a: 1, b: 2, c: "2" }));
        return Promise.resolve({ a: 1 })
            .then((0, with_context_1.withCtxAwait)('b', () => 2))
            .then((0, with_context_1.withCtxAwait)('c', () => Promise.resolve(3)))
            .then(x => (0, chai_1.expect)(x).to.deep.equal({ a: 1, b: 2, c: 3 }));
    });
});
//# sourceMappingURL=with-context.spec.js.map