import mongoose from 'mongoose';
import { ICompetence } from '../interfaces/ICompetence.interface';

const CompetenceSchema = new mongoose.Schema<ICompetence>({
  periodo: String,
  descripcion: {
    type: String
  },
  code: {
    type: String
  }
});

CompetenceSchema.set('collection', 'competences');
const Competence = mongoose.model('Competence', CompetenceSchema);
export default Competence;
