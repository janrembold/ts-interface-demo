interface Base {
  title: string;
}

interface A extends Base {
  valueA?: string;
}

interface B extends Base {
  valueB?: string;
}

type Combined = A | B;

const test: Combined = {
  title: "foo",
  valueA: "bar"
};

const { title, valueA = "" }: Combined = test;
// Property 'bar' does not exist on type 'IFooTypes'. TS2339
