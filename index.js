var test = {
    title: "foo",
    valueA: "bar"
};
// works fine
console.log(test.valueA);
// Results in: index.ts:20:16 - error TS2339: Property 'valueA' does not exist on type 'Combined'.
var title = test.title, _a = test.valueA, valueA = _a === void 0 ? "" : _a;
