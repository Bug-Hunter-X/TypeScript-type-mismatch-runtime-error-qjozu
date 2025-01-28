function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("John")); // Output: Hello, John!

//The bug is that the compiler will not flag this as an error because it is type safe. However, it will cause a runtime error if the function is called with a number.  This is because the function is expecting a string or null but it is receiving a number.

console.log(greet(123));//This will cause a runtime error because of type mismatch. 