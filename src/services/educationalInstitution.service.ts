import { IEducationalInstitutionCreate, IEducationalInstitutionUpdate } from '../interfaces/IEducationalInstitution.interface';
import EducationalInstitution from '../model/EducationalInstitution.model';

class EducationalInstitutionService {
  async getEducationalInstitution() {
    const educationalInstitutions = await EducationalInstitution.find();
    return educationalInstitutions;
  }
  async createEducationalInstitution(educationalInstitution: IEducationalInstitutionCreate){
    const newEducationalInstitution = new EducationalInstitution(educationalInstitution);
    return await newEducationalInstitution.save();
  }
  async updateEducationalInstitution(id: string, educationalInstitution: IEducationalInstitutionUpdate){
    const updatedEducationalInstitution = await EducationalInstitution.findByIdAndUpdate(id, educationalInstitution);
    return updatedEducationalInstitution;
  }
  async deleteEducationalInstitution(id: string){
    const educationalInstitution = await EducationalInstitution.findByIdAndDelete(id);
    return educationalInstitution;
  }
}

export default new EducationalInstitutionService();
