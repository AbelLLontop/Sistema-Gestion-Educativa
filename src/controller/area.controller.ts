import { IId } from '../interfaces/global.interface';
import { IAreaCreate, IAreaUpdate } from '../interfaces/IArea.interface';
import AreaService from '../services/area.service';
import { RequestAll, RequestBody, RequestParams, ResponseEntity } from '../utils/Http';

export async function getAreas(req: RequestBody, res: ResponseEntity) {
  const Areas = await AreaService.getArea();
  res.json(Areas);
}
export async function createArea(req: RequestBody<IAreaCreate>, res: ResponseEntity) {
  const Area = await AreaService.createArea(req.body);
  res.json(Area);
}

export async function updateArea(req: RequestAll<IAreaUpdate, IId>, res: ResponseEntity) {
  const { id } = req.params;
  const updatedArea = await AreaService.updateArea(id, req.body);
  if (!updatedArea) {
    res.status(404).json({ message: 'Area not found' });
    return;
  }
  res.json(updatedArea);
}

export async function deleteArea(req: RequestParams<IId>, res: ResponseEntity) {
  const { id } = req.params;
  const Area = await AreaService.deleteArea(id);
  if (!Area) {
    res.status(404).json({ message: 'Area not found' });
    return;
  }
  res.json(Area);
}
