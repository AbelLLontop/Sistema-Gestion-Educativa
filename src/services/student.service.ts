import { IStudentCreate, IStudentUpdate } from '../interfaces/IStudent.interface';
import Student from '../model/Student.model';

class StudentService {
  async getStudent() {
    const students = await Student.find();
    return students;
  }
  async createStudent(student: IStudentCreate){
    const newStudent = new Student(student);
    return await newStudent.save();
  }
  async updateStudent(id: string, student: IStudentUpdate) {
    const updatedStudent = await Student.findByIdAndUpdate(id, student);
    return updatedStudent;
  }
  async deleteStudent(id: string) {
    const student = await Student.findByIdAndDelete(id);
    return student;
  }
}

export default new StudentService();
