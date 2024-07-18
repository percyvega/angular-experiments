import {Component, Output} from '@angular/core';
import {UserComponent} from "./user/UserComponent";
import {IsServerRuningComponent} from "./is-server-running/IsServerRuningComponent";
import {CourseCardComponent} from "./course-card/course-card.component";
import {NgOptimizedImage} from "@angular/common";
import {COURSES} from "../database/db-data";
import {Course} from "../database/course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    UserComponent,
    IsServerRuningComponent,
    CourseCardComponent,
    NgOptimizedImage
  ],
})
export class AppComponent {

  protected readonly COURSES = COURSES;

  onCourseSelected($event: Course) {
    console.log('onCourseSelected: ' + JSON.stringify($event));
  }

}
