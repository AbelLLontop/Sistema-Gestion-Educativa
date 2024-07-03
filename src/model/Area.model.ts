import mongoose from 'mongoose';
import { IArea } from '../interfaces/IArea.interface';
import { ICompetence } from '../interfaces/ICompetence.interface';

const CompetenceSchema = new mongoose.Schema<ICompetence>({
  descripcion: {
    type: String,
    required: true
  }
});

const AreaSchema = new mongoose.Schema<IArea>({
  nombre: {
    type: String,
    unique:true,
    required: true
  },
  status: {
    type: Boolean,
    default: true,
    required: true
  }
},{
  timestamps: true
});

AreaSchema.set('collection', 'areas');
const Area = mongoose.model('Area', AreaSchema);
export default Area;
