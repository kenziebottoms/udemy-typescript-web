import { User } from './models/User';

const mav = new User({
  name: 'Pete Mitchell',
  age: 24,
});

mav.set({ name: 'Maverick Mitchell' });

console.log(mav.get('name'));
console.log(mav.get('age'));
