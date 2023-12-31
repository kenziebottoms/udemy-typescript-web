import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
      <div>
        <h1>User Details</h1>
        <div>${this.model.get('name')}</div>
        <div>${this.model.get('age')}</div>
      </div>
    `;
  }
}
