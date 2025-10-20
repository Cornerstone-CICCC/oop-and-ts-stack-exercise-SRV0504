const Stack = require('../lib/Stack');

function removeEvenNums(stack) {
  const tempStack = new Stack();

 
  while (!stack.isEmpty()) {
    const current = stack.pop();
    if (current % 2 !== 0) {
      tempStack.push(current);
    }
  }

  
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Test
const stack = new Stack();
stack.push(5);  // odd
stack.push(8);  // even
stack.push(1);  // odd
stack.push(3);  // odd
stack.push(6);  // even

removeEvenNums(stack);
console.log(stack.printStack()); // [5, 1, 3]
