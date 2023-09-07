import { User } from './models/User';

const mav = new User({
  name: 'Pete Mitchell',
  age: 24,
});

mav.on('change', () => {
  console.log('change #1');
});
mav.on('change', () => {
  console.log('change #2');
});
mav.on('save', () => {
  console.log('save');
});

mav.trigger('save');
mav.trigger('change');
mav.trigger('other');
