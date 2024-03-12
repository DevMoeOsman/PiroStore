import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'moe osman',
    email: 'moeeasd@gmail.com',
    password: bcrypt.hashSync('123456232323', 10),
  },
];

export default users;
