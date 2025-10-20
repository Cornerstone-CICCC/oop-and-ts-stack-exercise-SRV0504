const Stack = require('../lib/Stack');

function lowercaseStrings(stack) {
  const tempStack = new Stack();

  
  while (!stack.isEmpty()) {
    const current = stack.pop();
    tempStack.push(typeof current === 'string' ? current.toLowerCase() : current);
  }

  
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Test
const stack = new Stack();
stack.push("Hello");
stack.push("woRLd");
stack.push("good");
stack.push("MORNING");

lowercaseStrings(stack);
console.log(stack.printStack()); // ["hello", "world", "good", "morning"]
