import mongoose from 'mongoose';
import { IMatricula } from '../interfaces/IMatricula.interface';

const MatriculaSchema = new mongoose.Schema<IMatricula>({
  promocion: {
    type: String,
    required: true
  },
  alumnos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Alumno',
      default: []
    }
  ],
  area: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Area',
      required: true
    },
    nombre: {
      type: String,
      required: true
    }
  },
  grado: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Grado',
      required: true
    },
    nombre: {
      type: String,
      required: true
    }
  },
  seccion: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seccion',
      required: true
    },
    nombre: {
      type: String,
      required: true
    }
  }
});

MatriculaSchema.index({ alumno: 1, area: 1, grado: 1, seccion: 1, promocion: 1 }, { unique: true });
MatriculaSchema.set('collection', 'matriculas');

const Matricula = mongoose.model('Matricula', MatriculaSchema);
export default Matricula;
