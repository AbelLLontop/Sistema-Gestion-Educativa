import { IEducationalInstitution, IEducationalInstitutionCreate, IEducationalInstitutionUpdate } from '../interfaces/IEducationalInstitution.interface';
import EducationalInstitution from '../model/EducationalInstitution.model';

class EducationalInstitutionService {
  async getEducationalInstitution(): Promise<IEducationalInstitution[]> {
    const educationalInstitutions = await EducationalInstitution.find();
    return educationalInstitutions;
  }
  async createEducationalInstitution(educationalInstitution: IEducationalInstitutionCreate): Promise<IEducationalInstitution> {
    const newEducationalInstitution = new EducationalInstitution(educationalInstitution);
    return await newEducationalInstitution.save();
  }
  async updateEducationalInstitution(id: string, educationalInstitution: IEducationalInstitutionUpdate): Promise<IEducationalInstitution | null> {
    const updatedEducationalInstitution = await EducationalInstitution.findByIdAndUpdate(id, educationalInstitution);
    return updatedEducationalInstitution;
  }
  async deleteEducationalInstitution(id: string): Promise<IEducationalInstitution | null> {
    const educationalInstitution = await EducationalInstitution.findByIdAndDelete(id);
    return educationalInstitution;
  }
}

export default new EducationalInstitutionService();
