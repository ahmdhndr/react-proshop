import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'jane@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
