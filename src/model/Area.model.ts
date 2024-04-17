import mongoose from 'mongoose';
import { IArea } from '../interfaces/IArea.interface';

const AreaSchema = new mongoose.Schema<IArea>({
  name: {
    type: String
  },
  competences: [
    {
      _id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Competence'
      },
    }
  ]
});

AreaSchema.set('collection', 'areas');
const Area = mongoose.model('Area', AreaSchema);
export default Area;
