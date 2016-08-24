import { Component } from '@angular/core';
import { Contact-Form }    from './contactform';

@Component({
  selector: 'contactform',
  templateUrl: './contactform.component.html'
})


export class ContactFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() { this.submitted = true; }



  active = true;
  newContactForm() {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}