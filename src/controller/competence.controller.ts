import { IId } from '../interfaces/global.interface';
import { ICompetenceCreate, ICompetenceUpdate } from '../interfaces/ICompetence.interface';
import CompetenceService from '../services/competence.service';
import { RequestAll, RequestBody, RequestParams, ResponseEntity } from '../utils/Http';

export async function getCompetences(req: RequestBody, res: ResponseEntity) {
  const Competences = await CompetenceService.getCompetence();
  res.json(Competences);
}
export async function createCompetence(req: RequestBody<ICompetenceCreate>, res: ResponseEntity) {
  const Competence = await CompetenceService.createCompetence(req.body);
  res.json(Competence);
}

export async function updateCompetence(req: RequestAll<ICompetenceUpdate, IId>, res: ResponseEntity) {
  const { id } = req.params;
  const updatedCompetence = await CompetenceService.updateCompetence(id, req.body);
  if (!updatedCompetence) {
    res.status(404).json({ message: 'Competence not found' });
    return;
  }
  res.json(updatedCompetence);
}

export async function deleteCompetence(req: RequestParams<IId>, res: ResponseEntity) {
  const { id } = req.params;
  const Competence = await CompetenceService.deleteCompetence(id);
  if (!Competence) {
    res.status(404).json({ message: 'Competence not found' });
    return;
  }
  res.json(Competence);
}
