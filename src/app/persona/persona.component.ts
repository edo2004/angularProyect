import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  name : string = 'Juan';
  lastName: string = 'Perez';
  age: number = 24;

  // attribute private
  // private age: number = 28;

  // getAge(): number {
  //   return this.age;
  // }
}
