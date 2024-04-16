import mongoose from 'mongoose';

const QualificationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  grades:[
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
                grade:{
                    type:Number
                }
            }
        ],
        average:{
            type:Number
        }
    }
  ]

});

QualificationSchema.set('collection', 'qualifications');
const Qualification = mongoose.model('Qualification', QualificationSchema);
export default Qualification;
