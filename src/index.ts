import { User } from './models/User';

const user = new User({ id: 2, name: 'Maverick Mitchell' });

user.on('save', () => {
  console.log(user);
});
user.save();
