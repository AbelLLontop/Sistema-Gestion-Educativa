import { IStudent } from "../../interfaces/IStudent.interface";

export interface StudentCreateDto extends Omit<IStudent, 'status'> {
}