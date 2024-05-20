import { IEducationalInstitutionCreate, IEducationalInstitutionUpdate } from '../interfaces/IEducationalInstitution.interface';
import EducationalInstitutionService from '../services/educationalInstitution.service';
import { Request, Response } from '../utils/Http';

export async function getEducationalInstitutions(req: Request, res: Response) {
  const EducationalInstitutions = await EducationalInstitutionService.getEducationalInstitution();
  res.json(EducationalInstitutions);
}
export async function createEducationalInstitution(req: Request<IEducationalInstitutionCreate>, res: Response) {
  const EducationalInstitution = await EducationalInstitutionService.createEducationalInstitution(req.body);
  res.json(EducationalInstitution);
}

export async function updateEducationalInstitution(req: Request<IEducationalInstitutionUpdate>, res: Response) {
  const { id } = req.params;
  const updatedEducationalInstitution = await EducationalInstitutionService.updateEducationalInstitution(id, req.body);
  if (!updatedEducationalInstitution) {
    res.status(404).json({ message: 'EducationalInstitution not found' });
    return;
  }
  res.json(updatedEducationalInstitution);
}

export async function deleteEducationalInstitution(req: Request, res: Response) {
  const { id } = req.params;
  const EducationalInstitution = await EducationalInstitutionService.deleteEducationalInstitution(id);
  if (!EducationalInstitution) {
    res.status(404).json({ message: 'EducationalInstitution not found' });
    return;
  }
  res.json(EducationalInstitution);
}
