// enum Color {
//   Red = 1,
//   Green = 2,
//   Blue = 3,
// }

// let myColor: Color = Color.Green;
// console.log(myColor);

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function turn(dir: Direction) {
  if (dir === Direction.Left) {
    console.log('turning left');
  }
}

// turn(Direction.Left);
// turn('left');

enum Role {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

interface User {
  name: string;
  role: Role;
}

// const alice: User = { name: 'Alice', role: Role.Admin };
// const bob: User = { name: 'Bob', role: 'superadmin' }; // ❌ not possible

enum Status {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Pending = 'PENDING',
}

function logStatus(status: Status) {
  console.log(`Current status: ${status}`);
}

// logStatus(Status.Failure);

enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

function getWelcomeMessage(role: UserRole): string {
  if (role === UserRole.Admin) return 'Welcome, Admin!';
  if (role === UserRole.User) return 'Welcome back!';
  return 'Welcome guest, please log in';
}

console.log(getWelcomeMessage(UserRole.Admin));
console.log(getWelcomeMessage(UserRole.Guest));
