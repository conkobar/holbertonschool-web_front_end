function studentHogwarts() {
  // module for wizards and their points
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  // return four methods
  return {
    setName: (newName) => {
      name = newName;
    },
    rewardStudent: () => {
      changeScoreBy(1);
    },
    penalizeStudent: () => {
      changeScoreBy(-1);
    },
    getScore: () => {
      return `${name}: ${privateScore}`;
    }
  };
};

// harry example
const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// draco example
const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
