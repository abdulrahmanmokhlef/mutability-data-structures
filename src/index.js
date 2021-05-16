function mutatingObject() {
  console.log("Mutations on objects");

  let object = {
    foo: "bar"
  };

  let newObject = object;

  newObject.foo = "test";

  console.log("Object: ", object.foo); // test
  console.log("New Object: ", newObject.foo); // test

  console.log(object === newObject); // true
}

function immutatingObject() {
  console.log("Enforcing immutability on objects");

  let object = {
    foo: "bar"
  };

  let newObject = {
    ...object
  };

  newObject.foo = "test";

  console.log("Object: ", object.foo); // test
  console.log("New Object: ", newObject.foo); // test

  console.log(object === newObject); // false
}

function mutatingArray() {
  console.log("Mutations on arrays");

  let array = ["foo", "bar"];
  let newArray = array;

  newArray.push("baz");

  console.log("Array:", array); // ['foo', 'bar', 'baz']
  console.log("NewArray", newArray); // ['foo', 'bar', 'baz']

  console.log(array === newArray); // true
}

function immutatingArray() {
  console.log("Enforcing immutability on arrays");

  let array = ["foo", "bar"];
  let newArray = [...array];

  newArray.push("baz");

  console.log("Array", array); // ['foo', 'bar', 'baz']
  console.log("NewA rray", newArray); // ['foo', 'bar', 'baz']

  console.log(array === newArray); // false
}

// mutatingObject();
// immutatingObject();

// mutatingArray();
// immutatingArray();

console.log("1" == 1);

const result = 1 + 1 + 1 + 1 + "1";

console(result);
