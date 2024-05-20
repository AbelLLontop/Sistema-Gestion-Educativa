import { IStudentCreate, IStudentUpdate } from '../interfaces/IStudent.interface';
import studentService from '../services/student.service';
import { Request, Response } from '../utils/Http';

export async function getStudents(req: Request, res: Response) {
  const students = await studentService.getStudent();
  res.json(students);
}
export async function createStudent(req: Request<IStudentCreate>, res: Response) {
  const student = await studentService.createStudent(req.body);
  res.json(student);
}

export async function updateStudent(req: Request<IStudentUpdate>, res: Response) {
  const { id } = req.params;
  const updatedStudent = await studentService.updateStudent(id, req.body);
  if (!updatedStudent) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  res.json(updatedStudent);
}

export async function deleteStudent(req: Request, res: Response) {
  const { id } = req.params;
  const student = await studentService.deleteStudent(id);
  if (!student) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  res.json(student);
}
