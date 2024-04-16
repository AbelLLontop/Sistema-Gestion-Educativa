import mongoose from 'mongoose';

const AreaSchema = new mongoose.Schema({
  name: {
    type: String
  },
  academic_period: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicPeriod'
  },
  competences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Competence'
    }
  ]
});

AreaSchema.set('collection', 'areas');
const Area = mongoose.model('Area', AreaSchema);
export default Area;
