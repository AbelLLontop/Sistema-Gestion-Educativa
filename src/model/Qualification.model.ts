import mongoose from 'mongoose';
import { IQualification } from '../interfaces/IQualification.interface';

const QualificationSchema = new mongoose.Schema<IQualification>({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  grade: String,
  section: String,
  notas:[
    {
        area:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Area'
        },
        competences:[
            {
                competence:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Competence'
                },
                periodo:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Periodo'
                },
                nota:{
                    type:Number
                }
            }
        ],
        promedio:{
            type:Number
        }
    }
  ]

});

QualificationSchema.set('collection', 'qualifications');
const Qualification = mongoose.model('Qualification', QualificationSchema);
export default Qualification;
