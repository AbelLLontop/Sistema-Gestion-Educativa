import mongoose from 'mongoose';
import { IStudent } from '../interfaces/IStudent';

const StudentSchema = new mongoose.Schema<IStudent>({
  names: {
    type: String,
    required: true
  },
  surnames: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  type_document: {
    type: String,
    required: true,
    enum: ['DNI', 'PASSPORT'],
    default: 'DNI'
  },
  document: {
    type: String,
    required: true
  }
});
StudentSchema.set('collection', 'students');
const Student = mongoose.model('Student', StudentSchema);
export default Student;
