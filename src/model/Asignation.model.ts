import mongoose from 'mongoose';
import { IAsignation } from '../interfaces/IAsignation.interface';

const AssignationSchema = new mongoose.Schema<IAsignation>({
  grade: String,
  section: String,
  areas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Area'
    }
  ]
});
AssignationSchema.set('collection', 'assignations');
const Assignation = mongoose.model('Assignation', AssignationSchema);
export default Assignation;
 