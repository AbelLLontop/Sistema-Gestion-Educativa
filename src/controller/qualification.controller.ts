import { IId } from '../interfaces/global.interface';
import { IQualificationCreate, IQualificationUpdate } from '../interfaces/IQualification.interface';
import QualificationService from '../services/qualification.service';
import { RequestAll, RequestBody, RequestParams, ResponseEntity } from '../utils/Http';

export async function getQualifications(req: RequestBody, res: ResponseEntity) {
  const Qualifications = await QualificationService.getQualification();
  res.json(Qualifications);
}
export async function createQualification(req: RequestBody<IQualificationCreate>, res: ResponseEntity) {
  const Qualification = await QualificationService.createQualification(req.body);
  res.json(Qualification);
}

export async function updateQualification(req: RequestAll<IQualificationUpdate, IId>, res: ResponseEntity) {
  const { id } = req.params;
  const updatedQualification = await QualificationService.updateQualification(id, req.body);
  if (!updatedQualification) {
    res.status(404).json({ message: 'Qualification not found' });
    return;
  }
  res.json(updatedQualification);
}

export async function deleteQualification(req: RequestParams<IId>, res: ResponseEntity) {
  const { id } = req.params;
  const Qualification = await QualificationService.deleteQualification(id);
  if (!Qualification) {
    res.status(404).json({ message: 'Qualification not found' });
    return;
  }
  res.json(Qualification);
}
