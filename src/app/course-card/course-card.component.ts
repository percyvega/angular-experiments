import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../../database/course";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
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

  isImageVisible() {
    return this.course.iconUrl;
  }

  myTitleClasses() {
    return {
      'beginner': this.course.category == 'BEGINNER',
      'intermediate': this.course.category == 'INTERMEDIATE',
      'advanced': this.course.category == 'ADVANCED'
    };
  }

  courseTitleStyles() {
    return {'text-decoration': 'underline'};
  }
}
