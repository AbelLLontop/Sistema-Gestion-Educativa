import { ICompetence, ICompetenceCreate, ICompetenceUpdate } from '../interfaces/ICompetence.interface';
import Competence from '../model/Competence.model';

class CompetenceService {
  async getCompetence(): Promise<ICompetence[]> {
    const competences = await Competence.find();
    return competences;
  }
  async createCompetence(competence: ICompetenceCreate): Promise<ICompetence> {
    const newCompetence = new Competence(competence);
    return await newCompetence.save();
  }
  async updateCompetence(id: string, competence: ICompetenceUpdate): Promise<ICompetence | null> {
    const updatedCompetence = await Competence.findByIdAndUpdate(id, competence);
    return updatedCompetence;
  }
  async deleteCompetence(id: string): Promise<ICompetence | null> {
    const competence = await Competence.findByIdAndDelete(id);
    return competence;
  }
}

export default new CompetenceService();
