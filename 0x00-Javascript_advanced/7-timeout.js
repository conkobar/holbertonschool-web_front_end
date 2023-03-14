console.log('Start of the execution queue');

// playing with timeout
setTimeout(() => {
  console.log('Final code block to be executed');
});

for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.log('End of the loop printing');
// timeout resolves here
