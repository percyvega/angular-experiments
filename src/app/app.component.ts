import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
}

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

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user/>
      <br/>
      <app-is-server-running/>
      <br/>
      <app-user/>
    </section>`,
  standalone: true,
  imports: [
    UserComponent,
    IsServerRuningComponent
  ],
})
export class AppComponent {
}
