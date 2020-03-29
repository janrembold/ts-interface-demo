var test = {
    title: "foo",
    valueA: "bar"
};
var title = test.title, _a = test.valueA, valueA = _a === void 0 ? "" : _a;
// Property 'bar' does not exist on type 'IFooTypes'. TS2339
