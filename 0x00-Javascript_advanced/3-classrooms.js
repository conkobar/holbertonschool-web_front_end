const { arrowFunctionExpression } = require("@babel/types");

function createClassRoom(numberOfStudents) {
  // assign student seating
  function studentSeat(seat) {
    return () => seat;
  }
  // create student array
  let students = [];

  for (let idx = 0; idx < numberOfStudents; idx++) {
    // append seat number to array, noting offset for 0 index
    students.push(studentSeat(idx + 1));
  }
  // return array
  return students;
}

// create classroom
const classRoom = createClassRoom(10);

// print example seats
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
