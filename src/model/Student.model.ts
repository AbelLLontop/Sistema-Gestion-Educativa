import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true
  },
  surnames: {
    type: String,
    required: true
  },
  assignation:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignation'
  }
});
StudentSchema.set('collection', 'students');
const Student = mongoose.model('Student', StudentSchema);
export default Student;
