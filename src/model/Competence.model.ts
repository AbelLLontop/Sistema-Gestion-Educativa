import mongoose from 'mongoose';
import { ICompetence } from '../interfaces/ICompetence.interface';

const CompetenceSchema = new mongoose.Schema<ICompetence>({
  descripcion: {
    type: String,
    required: true
  }
});

CompetenceSchema.set('collection', 'competences');
const Competence = mongoose.model('Competence', CompetenceSchema);
export default Competence;
