import { IId } from '../interfaces/global.interface';
import { IAsignationCreate, IAsignationUpdate } from '../interfaces/IAsignation.interface';
import AsignationService from '../services/asignation.service';
import { RequestAll, RequestBody, RequestParams, ResponseEntity } from '../utils/Http';

export async function getAsignations(req: RequestBody, res: ResponseEntity) {
  const Asignations = await AsignationService.getAsignation();
  res.json(Asignations);
}
export async function createAsignation(req: RequestBody<IAsignationCreate>, res: ResponseEntity) {
  const Asignation = await AsignationService.createAsignation(req.body);
  res.json(Asignation);
}

export async function updateAsignation(req: RequestAll<IAsignationUpdate, IId>, res: ResponseEntity) {
  const { id } = req.params;
  const updatedAsignation = await AsignationService.updateAsignation(id, req.body);
  if (!updatedAsignation) {
    res.status(404).json({ message: 'Asignation not found' });
    return;
  }
  res.json(updatedAsignation);
}

export async function deleteAsignation(req: RequestParams<IId>, res: ResponseEntity) {
  const { id } = req.params;
  const Asignation = await AsignationService.deleteAsignation(id);
  if (!Asignation) {
    res.status(404).json({ message: 'Asignation not found' });
    return;
  }
  res.json(Asignation);
}
