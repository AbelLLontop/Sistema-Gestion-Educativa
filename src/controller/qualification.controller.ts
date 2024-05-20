import { IQualificationCreate, IQualificationUpdate } from '../interfaces/IQualification.interface';
import QualificationService from '../services/qualification.service';
import { Request, Response } from '../utils/Http';

export async function getQualifications(req: Request, res: Response) {
  const Qualifications = await QualificationService.getQualification();
  res.json(Qualifications);
}
export async function createQualification(req: Request<IQualificationCreate>, res: Response) {
  const Qualification = await QualificationService.createQualification(req.body);
  res.json(Qualification);
}

export async function updateQualification(req: Request<IQualificationUpdate>, res: Response) {
  const { id } = req.params;
  const updatedQualification = await QualificationService.updateQualification(id, req.body);
  if (!updatedQualification) {
    res.status(404).json({ message: 'Qualification not found' });
    return;
  }
  res.json(updatedQualification);
}

export async function deleteQualification(req: Request, res: Response) {
  const { id } = req.params;
  const Qualification = await QualificationService.deleteQualification(id);
  if (!Qualification) {
    res.status(404).json({ message: 'Qualification not found' });
    return;
  }
  res.json(Qualification);
}
