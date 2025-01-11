import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-mouse-events',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './mouse-events.component.html',
  styleUrl: './mouse-events.component.scss'
})
export class MouseEventsComponent {

  counter: number = 0;

  resetAndAlert(msg: string) {
    this.counter = 0;
    console.log("counter: " + this.counter);
    alert(msg);
  }

  incr() {
    this.counter++;
  }

  decr() {
    this.counter--;
  }
}
