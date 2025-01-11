import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-keyboard-events',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './keyboard-events.component.html',
  styleUrl: './keyboard-events.component.scss'
})
export class KeyboardEventsComponent {

  firstName: string = "";
  lastName: string = "";

  changedFirstName($event: any): void {
    console.log($event);
    console.log($event.key);
    console.log($event.target.value);
  }

  changedLastName($event: any): void {
    console.log($event);
    console.log($event.key);
    console.log($event.target.value);
  }

}
