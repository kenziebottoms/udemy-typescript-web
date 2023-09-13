import { User } from './models/User';

const user = new User({ name: 'Goose' });

console.log(user.get('name'));

user.on('change', () => {
  console.log('change');
});
user.trigger('change');
