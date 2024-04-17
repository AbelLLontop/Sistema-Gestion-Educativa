import { IId } from '../interfaces/global.interface';
import { IEducationalInstitutionCreate, IEducationalInstitutionUpdate } from '../interfaces/IEducationalInstitution.interface';
import EducationalInstitutionService from '../services/educationalInstitution.service';
import { RequestAll, RequestBody, RequestParams, ResponseEntity } from '../utils/Http';

export async function getEducationalInstitutions(req: RequestBody, res: ResponseEntity) {
  const EducationalInstitutions = await EducationalInstitutionService.getEducationalInstitution();
  res.json(EducationalInstitutions);
}
export async function createEducationalInstitution(req: RequestBody<IEducationalInstitutionCreate>, res: ResponseEntity) {
  const EducationalInstitution = await EducationalInstitutionService.createEducationalInstitution(req.body);
  res.json(EducationalInstitution);
}

export async function updateEducationalInstitution(req: RequestAll<IEducationalInstitutionUpdate, IId>, res: ResponseEntity) {
  const { id } = req.params;
  const updatedEducationalInstitution = await EducationalInstitutionService.updateEducationalInstitution(id, req.body);
  if (!updatedEducationalInstitution) {
    res.status(404).json({ message: 'EducationalInstitution not found' });
    return;
  }
  res.json(updatedEducationalInstitution);
}

export async function deleteEducationalInstitution(req: RequestParams<IId>, res: ResponseEntity) {
  const { id } = req.params;
  const EducationalInstitution = await EducationalInstitutionService.deleteEducationalInstitution(id);
  if (!EducationalInstitution) {
    res.status(404).json({ message: 'EducationalInstitution not found' });
    return;
  }
  res.json(EducationalInstitution);
}
