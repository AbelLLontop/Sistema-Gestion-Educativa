import { IAsignationCreate, IAsignationUpdate } from '../interfaces/IAsignation.interface';
import AsignationService from '../services/asignation.service';
import { Request, Response } from '../utils/Http';

export async function getAsignations(req: Request, res: Response) {
  const Asignations = await AsignationService.getAsignation();
  res.json(Asignations);
}
export async function createAsignation(req: Request<IAsignationCreate>, res: Response) {
  const Asignation = await AsignationService.createAsignation(req.body);
  res.json(Asignation);
}

export async function updateAsignation(req: Request<IAsignationUpdate>, res: Response) {
  const { id } = req.params;
  const updatedAsignation = await AsignationService.updateAsignation(id, req.body);
  if (!updatedAsignation) {
    res.status(404).json({ message: 'Asignation not found' });
    return;
  }
  res.json(updatedAsignation);
}

export async function deleteAsignation(req: Request, res: Response) {
  const { id } = req.params;
  const Asignation = await AsignationService.deleteAsignation(id);
  if (!Asignation) {
    res.status(404).json({ message: 'Asignation not found' });
    return;
  }
  res.json(Asignation);
}
