import { StudentCreateDto } from '../dto/StudentDto';
import studentService from '../services/student.service';
import { Request, Response } from '../utils/Http';

export async function getStudents(req: Request, res: Response) {
  const students = await studentService.getStudent();
  res.json(students);
}
export async function createStudent(req: Request<StudentCreateDto>, res: Response) {
  const student = await studentService.createStudent(req.body);
  res.json(student);
}