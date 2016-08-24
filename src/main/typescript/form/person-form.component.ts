import { Component } from '@angular/core';
import { Person }    from './person';


@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html'
})

export class PersonFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Person(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }

  active = true;
  newPerson() {
    this.model = new Person(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}