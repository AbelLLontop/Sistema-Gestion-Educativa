import { IStudent, IStudentCreate, IStudentUpdate } from '../interfaces/IStudent';
import Student from '../model/Student.model';

class StudentService {
  async getStudent(): Promise<IStudent[]> {
    const students = await Student.find();
    return students;
  }
  async createStudent(student: IStudentCreate): Promise<IStudent> {
    const newStudent = new Student(student);
    return await newStudent.save();
  }
  async updateStudent(id: string, student: IStudentUpdate): Promise<IStudent | null> {
    const updatedStudent = await Student.findByIdAndUpdate(id, student);
    return updatedStudent;
  }
  async deleteStudent(id: string): Promise<IStudent | null> {
    const student = await Student.findByIdAndDelete(id);
    return student;
  }
}

export default new StudentService();
