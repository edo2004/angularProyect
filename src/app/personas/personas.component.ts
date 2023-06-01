import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  disable = false;
  message = 'name="operatorA"'
  tittle = 'Engineer';
  show = false;

  addPerson() {
    this.show = true;
    this.message = 'Person added'
  }

  // modifyTittle(event: Event) {
  //   this.tittle = (<HTMLInputElement> event.target).value;
  // }
}
