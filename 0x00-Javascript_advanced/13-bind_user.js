// create user obj
const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineeer',
};

// create function to welcome user
function logWelcomeUser(welcomeString) {
  console.log(
    `${user.welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`
  );
}

// bind logWelcomeUser to user
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// print an example
bindLogWelcomeUser('Hello');
