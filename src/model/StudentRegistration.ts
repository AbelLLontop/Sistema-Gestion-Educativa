import mongoose from "mongoose";

const StudentRegistrationSchema = new mongoose.Schema({
    grade:{
        type:String
    },
    section:{
        type:String
    },
    academic_period:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AcademicPeriod'
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
})
StudentRegistrationSchema.set('collection','studentRegistrations');
const StudentRegistration = mongoose.model('StudentRegistration',StudentRegistrationSchema);
export default StudentRegistration;
