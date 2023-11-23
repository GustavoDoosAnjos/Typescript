import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public user: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.setAge': this.onSetAge,
    };
  }

  onSetAge() {
    const randomAge = Math.floor(Math.random() * 100);

    this.user.set({ age: randomAge });
  }

  template(): string {
    return `
            <div>
                <h1>User Information:</h1><br>

                <p>User name: ${this.user.get('name')}</p>
                <p>User Age: ${this.user.get('age')}</p>
            </div>

            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="age">Age:</label><br>
            <input type="text" id="age" name="age"><br><br>

            <button>Bijada</button>
            <button class="setAge">randomAge</button>`;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
