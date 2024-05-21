import mongoose from 'mongoose';
import { IStudent } from '../interfaces/IStudent.interface';

const StudentSchema = new mongoose.Schema<IStudent>(
  {
    nombres: {
      type: String,
      required: true
    },
    apellidos: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  { timestamps: true }
);
StudentSchema.set('collection', 'estudiantes');
const Student = mongoose.model('Student', StudentSchema);
export default Student;
