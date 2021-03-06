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

// works fine
console.log(test.valueA);

// Results in: index.ts:20:16 - error TS2339: Property 'valueA' does not exist on type 'Combined'.
const { title, valueA = "" }: Combined = test;
