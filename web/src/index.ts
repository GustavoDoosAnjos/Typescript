import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'ainds', age: 123123 });

const userForm = new UserForm(document.getElementById('UserForm'), user);

userForm.render();
