function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  if (typeof name === 'number') {
    throw new Error('Name cannot be a number');
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("John")); // Output: Hello, John!

//This will now throw an error because of type guard
console.log(greet(123)); 