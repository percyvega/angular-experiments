import {Component, OnInit} from '@angular/core';
import {UserComponent} from "./user/UserComponent";
import {IsServerRuningComponent} from "./is-server-running/IsServerRuningComponent";
import {CourseCardComponent} from "./course-card/course-card.component";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {Course} from "../database/course";
import {Observable} from "rxjs";
import {CoursesService} from "./service/courses.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    UserComponent,
    IsServerRuningComponent,
    CourseCardComponent,
    NgOptimizedImage,
    AsyncPipe
  ],
})
export class AppComponent implements OnInit {

  protected COURSES$!: Observable<Course[]>;

  constructor(private courseService: CoursesService) {
  }

  onCourseSelected($event: Course) {
    console.log('onCourseSelected: ' + JSON.stringify($event));
  }

  ngOnInit(): void {
    this.COURSES$ = this.courseService.loadCourses();
  }

}
