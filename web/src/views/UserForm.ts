import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.setAge': this.onSetAge,
      'click:.setName': this.onSetName,
      'click:.saveModel': this.onSaveModel,
    };
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  onSaveModel = (): void => {
    this.model.save();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  template(): string {
    return `
            <input type="text" id="name" name="name" placeholder="${this.model.get(
              'name'
            )}"><br>

            <button class="setName">Change name</button>
            <button class="setAge">Set random age</button>
            <button class="saveModel">Save user</button>
            `;
  }
}
