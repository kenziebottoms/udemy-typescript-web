import { User } from './models/User';

const user = new User({ id: 1 });
user.set({ name: 'New Rip', age: 29 });
user.save();

const newUser = new User({ name: 'Maverick', age: 24 });
newUser.save();
