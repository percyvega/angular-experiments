import {Component} from "@angular/core";

@Component({
  selector: 'app-is-server-running',
  template: `
    Is server running?
    <b>{{ isServerRunning }}</b>,
    @if (isServerRunning) {
      it is! :)
    } @else {
      is is not! :(
    }
  `,
  standalone: true
})
export class IsServerRuningComponent {
  isServerRunning = Math.random() >= 0.5;
}
