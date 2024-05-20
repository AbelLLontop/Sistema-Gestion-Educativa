import mongoose from 'mongoose';
import { IEducationalInstitution } from '../interfaces/IEducationalInstitution.interface';

const EducationalInstitutionSchema = new mongoose.Schema<IEducationalInstitution>({
  ie: {
    type: String
  },
  modality: {
    type: String
  },
  level: {
    type: String
  },
  teacher: {
    type: String
  },
  ugel: {
    type: String
  }
});

EducationalInstitutionSchema.set('collection', 'educationalInstitutions');
const EducationalInstitution = mongoose.model('EducationalInstitution', EducationalInstitutionSchema);
export default EducationalInstitution;
