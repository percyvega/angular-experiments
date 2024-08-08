import {Request, Response} from 'express';
import {COURSES} from '../../database/db-data';
import {Course} from "../../database/course";

export function getAllCourses(req: Request, res: Response) {
  res.status(200).json(Object.values(COURSES));
}

export function getCourseById(req: Request, res: Response) {
  const courseId = req.params['id'];
  const courses: Course[] = Object.values(COURSES);
  const course = courses.find(course => course.id == Number(courseId));

  res.status(200).json(course);
}
