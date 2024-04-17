import { IId } from '../interfaces/global.interface';
import { IPeriodoCreate, IPeriodoUpdate } from '../interfaces/IPeriodo.interface';
import PeriodoService from '../services/periodo.service';
import { RequestAll, RequestBody, RequestParams, ResponseEntity } from '../utils/Http';

export async function getPeriodos(req: RequestBody, res: ResponseEntity) {
  const Periodos = await PeriodoService.getPeriodo();
  res.json(Periodos);
}
export async function createPeriodo(req: RequestBody<IPeriodoCreate>, res: ResponseEntity) {
  const Periodo = await PeriodoService.createPeriodo(req.body);
  res.json(Periodo);
}

export async function updatePeriodo(req: RequestAll<IPeriodoUpdate, IId>, res: ResponseEntity) {
  const { id } = req.params;
  const updatedPeriodo = await PeriodoService.updatePeriodo(id, req.body);
  if (!updatedPeriodo) {
    res.status(404).json({ message: 'Periodo not found' });
    return;
  }
  res.json(updatedPeriodo);
}

export async function deletePeriodo(req: RequestParams<IId>, res: ResponseEntity) {
  const { id } = req.params;
  const Periodo = await PeriodoService.deletePeriodo(id);
  if (!Periodo) {
    res.status(404).json({ message: 'Periodo not found' });
    return;
  }
  res.json(Periodo);
}
