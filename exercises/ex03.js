const Stack = require('../lib/Stack');

function removeDuplicates(stack) {
  const tempStack = new Stack();
  const seen = new Set();

  while (!stack.isEmpty()) {
    const current = stack.pop();
    if (!seen.has(current)) {
      seen.add(current);
      tempStack.push(current);
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Test
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack);
console.log(stack.printStack()); // [2, 5, 1, 3]
