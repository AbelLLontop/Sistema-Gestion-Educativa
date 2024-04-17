import { IId } from '../interfaces/global.interface';
import { IStudentCreate, IStudentUpdate } from '../interfaces/IStudent.interface';
import studentService from '../services/student.service';
import { RequestAll, RequestBody, RequestParams, ResponseEntity } from '../utils/Http';

export async function getStudents(req: RequestBody, res: ResponseEntity) {
  const students = await studentService.getStudent();
  res.json(students);
}
export async function createStudent(req: RequestBody<IStudentCreate>, res: ResponseEntity) {
  const student = await studentService.createStudent(req.body);
  res.json(student);
}

export async function updateStudent(req: RequestAll<IStudentUpdate, IId>, res: ResponseEntity) {
  const { id } = req.params;
  const updatedStudent = await studentService.updateStudent(id, req.body);
  if (!updatedStudent) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  res.json(updatedStudent);
}

export async function deleteStudent(req: RequestParams<IId>, res: ResponseEntity) {
  const { id } = req.params;
  const student = await studentService.deleteStudent(id);
  if (!student) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  res.json(student);
}
