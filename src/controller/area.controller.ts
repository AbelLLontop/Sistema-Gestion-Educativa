import { AreaCreateDto, AreaUpdateDto } from '../dto/AreaDto';
import areaService from '../services/area.service';
import ApplicationError from '../utils/CustomError';
import { Request, Response } from '../utils/Http';

export async function getAreas(req: Request, res: Response) {
  const areas = await areaService.getArea();
  res.json(areas);
}
export async function createArea(req: Request<AreaCreateDto>, res: Response) {
  let response = {}
  if(req?.body?.multiple){
    response = await areaService.createMultipleArea(req.body.text!);
  }else{
    response = await areaService.createArea({
      nombre:req.body.nombre
    });
  }
  res.json(response);
}
export async function updateArea(req: Request<AreaUpdateDto>, res: Response) {
  const area = await areaService.updateArea(req.params.id, req.body);
  if (!area) throw new ApplicationError('Area not found');
  res.json(area);
}

export async function deleteArea(req: Request, res: Response) {
  const area = await areaService.deleteArea(req.params.id);
  if (!area) throw new ApplicationError('Area not found');
  res.json(area);
}
