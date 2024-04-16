import mongoose from 'mongoose';

const CompetenceSchema = new mongoose.Schema({
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
