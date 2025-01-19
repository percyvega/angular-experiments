import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MouseEventsComponent} from "./mouse-events/mouse-events.component";
import {KeyboardEventsComponent} from "./keyboard-events/keyboard-events.component";
import {DirectivesComponent} from "./directives/directives.component";
import {DataBindingComponent} from "./data-binding/data-binding.component";
import {ViewChildComponent} from "./view-child/view-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, KeyboardEventsComponent, MouseEventsComponent, DirectivesComponent, DataBindingComponent, ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
