import mongoose from 'mongoose';
import { IPeriodo } from '../interfaces/IPeriodo.interface';

export const PeriodoSchema = new mongoose.Schema<IPeriodo>({
  name: {
    type: String
  },
});

PeriodoSchema.set('collection', 'periodos');
const Periodo = mongoose.model('Periodo', PeriodoSchema);
export default Periodo;
