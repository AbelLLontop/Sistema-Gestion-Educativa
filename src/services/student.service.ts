import { IStudentCreate, IStudentUpdate } from '../interfaces/IStudent.interface';
import { StudentCreateDto } from '../model/dto/StudentDto';
import Student from '../model/Student.model';

class StudentService {
  async getStudent() {
    const students = await Student.find({status:true});
    return students;
  }
  async createStudent(student: StudentCreateDto){
    const newStudent = new Student(student);
    return await newStudent.save();
  }
}

export default new StudentService();
