import {Component, OnInit} from '@angular/core';
import {UserComponent} from "./user/UserComponent";
import {IsServerRuningComponent} from "./is-server-running/IsServerRuningComponent";
import {CourseCardComponent} from "./course-card/course-card.component";
import {NgOptimizedImage} from "@angular/common";
import {Course} from "../database/course";
import {HttpClient, HttpParams} from "@angular/common/http";

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
export class AppComponent implements OnInit {

  protected COURSES: Course[] = [];

  constructor(private http: HttpClient) {
  }

  onCourseSelected($event: Course) {
    console.log('onCourseSelected: ' + JSON.stringify($event));
  }

  ngOnInit(): void {

    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "7");

    this.http.get<Course[]>('api/courses', {params})
      .subscribe(
        courses => this.COURSES = courses
      )
  }

}
