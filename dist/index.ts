const name = "Wooqii",
  age = 31,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("Wooqii", 31, "male"));

export {};
