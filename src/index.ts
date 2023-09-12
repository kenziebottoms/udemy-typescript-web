import { User } from './models/User';

const user = new User({ name: 'Goose' });
user.save();

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
