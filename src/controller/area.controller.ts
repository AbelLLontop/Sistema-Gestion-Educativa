import { AreaCreateDto } from '../model/dto/AreaDto';
import areaService from '../services/area.service';
import ApplicationError from '../utils/CustomError';
import { Request, Response } from '../utils/Http';

export async function getAreas(req: Request, res: Response) {
  const areas = await areaService.getArea();
  res.json(areas);
}
export async function createArea(req: Request<AreaCreateDto>, res: Response) {
  const area = await areaService.createArea(req.body);
  res.json(area);
}
export async function updateArea(req: Request<AreaCreateDto>, res: Response) {
  const area = await areaService.updateArea(req.params.id, req.body);
  if(!area) throw new ApplicationError('Area not found');
  res.json(area);
}

export async function deleteArea(req:Request,res:Response){
  const area = await areaService.deleteArea(req.params.id);
  if(!area) throw new ApplicationError('Area not found');
  res.json(area);
}
