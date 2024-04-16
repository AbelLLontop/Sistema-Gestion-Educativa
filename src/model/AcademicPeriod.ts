import mongoose from 'mongoose';

const AcademicPeriodSchema = new mongoose.Schema({
  name: {
    type: String
  },
  areas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Area'
    }
  ]
});

AcademicPeriodSchema.set('collection', 'academicPeriods');
const AcademicPeriod = mongoose.model('AcademicPeriod', AcademicPeriodSchema);
export default AcademicPeriod;
