import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../../database/course";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {

  @Input({required: true})
  course!: Course;

  @Input({required: true})
  index!: number;

  @Output('courseSelected')
  courseEventEmitter = new EventEmitter<Course>();

  onCourseButtonClicked(description: string) {
    console.log('onCourseButtonClicked: ' + description);
    this.courseEventEmitter.emit(this.course);
  }
}
