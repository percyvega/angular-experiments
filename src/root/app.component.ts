import {Component} from '@angular/core';
import {UserComponent} from "../user/UserComponent";
import {IsServerRuningComponent} from "../is-server-running/IsServerRuningComponent";

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
