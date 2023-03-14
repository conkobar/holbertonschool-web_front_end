function welcomeMessage(fullName) {
  // closure for alert saying fullName
  function displayName() {
    alert(`Welcome ${fullName}`);
  }
  displayName();
}

// create messages
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');

// execute messages
guillaume();
alex();
fred();
