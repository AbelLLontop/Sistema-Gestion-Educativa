import mongoose from 'mongoose';
import { ICompetence } from '../interfaces/ICompetence.interface';

const CompetenceSchema = new mongoose.Schema<ICompetence>({
  periodo:{
    _id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Periodo'
    },
    name:{
      type: String
    }
  },
  name: {
    type: String
  },
  code: {
    type: String
  }
});

CompetenceSchema.set('collection', 'competences');
const Competence = mongoose.model('Competence', CompetenceSchema);
export default Competence;
