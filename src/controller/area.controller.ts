import { IAreaCreate, IAreaUpdate } from '../interfaces/IArea.interface';
import AreaService from '../services/area.service';
import { Request, Response } from '../utils/Http';

export async function getAreas(req: Request, res: Response) {
  const Areas = await AreaService.getArea();
  res.json(Areas);
}

export async function createArea(req: Request<IAreaCreate>, res: Response) {
  const Area = await AreaService.createArea(req.body);
  res.json(Area);
}

export async function updateArea(req: Request<IAreaUpdate>, res: Response) {
  const { id } = req.params;
  const updatedArea = await AreaService.updateArea(id, req.body);
  if (!updatedArea) {
    res.status(404).json({ message: 'Area not found' });
    return;
  }
  res.json(updatedArea);
}

export async function deleteArea(req: Request, res: Response) {
  const { id } = req.params;
  const Area = await AreaService.deleteArea(id);
  if (!Area) {
    res.status(404).json({ message: 'Area not found' });
    return;
  }
  res.json(Area);
}
