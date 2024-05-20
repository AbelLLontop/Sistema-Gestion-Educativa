import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true
  }
});
StudentSchema.set('collection', 'students');
const Student = mongoose.model('Student', StudentSchema);
export default Student;
