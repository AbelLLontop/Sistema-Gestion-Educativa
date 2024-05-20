import mongoose from 'mongoose';
import { IQualification } from '../interfaces/IQualification.interface';

const QualificationSchema = new mongoose.Schema<IQualification>({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  competencia:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Competence'
  },
  score:{
    type: Number
  }
});

QualificationSchema.set('collection', 'qualifications');
const Qualification = mongoose.model('Qualification', QualificationSchema);
export default Qualification;
