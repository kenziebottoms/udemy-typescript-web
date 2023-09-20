import { User } from './models/User';

const user = User.buildUser({ id: 2, name: 'Maverick Mitchell' });

user.on('change', () => {
  console.log(user);
});
user.fetch();

console.log(user.isAdminUser());
