import { ICompetenceCreate, ICompetenceUpdate } from '../interfaces/ICompetence.interface';
import Competence from '../model/Competence.model';

class CompetenceService {
  async getCompetence() {
    const competences = await Competence.find();
    return competences;
  }
  async createCompetence(competence: ICompetenceCreate) {
    const newCompetence = new Competence(competence);
    return await newCompetence.save();
  }
  async updateCompetence(id: string, competence: ICompetenceUpdate) {
    const updatedCompetence = await Competence.findByIdAndUpdate(id, competence);
    return updatedCompetence;
  }
  async deleteCompetence(id: string){
    const competence = await Competence.findByIdAndDelete(id);
    return competence;
  }
}

export default new CompetenceService();
