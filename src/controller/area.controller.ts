import { AreaCreateDto } from '../model/dto/AreaDto';
import areaService from '../services/area.service';
import { Request, Response } from '../utils/Http';

export async function getAreas(req: Request, res: Response) {
  const areas = await areaService.getArea();
  res.json(areas);
}
export async function createArea(req: Request<AreaCreateDto>, res: Response) {
  const area = await areaService.createArea(req.body);
  res.json(area);
}
