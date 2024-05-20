import {  IQualificationCreate, IQualificationUpdate } from '../interfaces/IQualification.interface';
import Qualification from '../model/Qualification.model';

class QualificationService {
  async getQualification() {
    const qualifications = await Qualification.find();
    return qualifications;
  }
  async createQualification(qualification: IQualificationCreate) {
    const newQualification = new Qualification(qualification);
    return await newQualification.save();
  }
  async updateQualification(id: string, qualification: IQualificationUpdate) {
    const updatedQualification = await Qualification.findByIdAndUpdate(id, qualification);
    return updatedQualification;
  }
  async deleteQualification(id: string){
    const qualification = await Qualification.findByIdAndDelete(id);
    return qualification;
  }
}

export default new QualificationService();
