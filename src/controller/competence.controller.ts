import { ICompetenceCreate, ICompetenceUpdate } from '../interfaces/ICompetence.interface';
import CompetenceService from '../services/competence.service';
import { Request, Response } from '../utils/Http';

export async function getCompetences(req: Request, res: Response) {
  const Competences = await CompetenceService.getCompetence();
  res.json(Competences);
}
export async function createCompetence(req: Request<ICompetenceCreate>, res: Response) {
  const Competence = await CompetenceService.createCompetence(req.body);
  res.json(Competence);
}

export async function updateCompetence(req: Request<ICompetenceUpdate>, res: Response) {
  const { id } = req.params;
  const updatedCompetence = await CompetenceService.updateCompetence(id, req.body);
  if (!updatedCompetence) {
    res.status(404).json({ message: 'Competence not found' });
    return;
  }
  res.json(updatedCompetence);
}

export async function deleteCompetence(req: Request, res: Response) {
  const { id } = req.params;
  const Competence = await CompetenceService.deleteCompetence(id);
  if (!Competence) {
    res.status(404).json({ message: 'Competence not found' });
    return;
  }
  res.json(Competence);
}
