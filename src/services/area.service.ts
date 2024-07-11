import Area from '../model/Area.model';
import { AreaCreateDto } from '../dto/AreaDto';
import ApplicationError from '../utils/CustomError';

class AreaService {
  async getArea() {
    const areas = await Area.find({status:true});
    return areas;
  }
  async deleteArea(id:string){
    const area = await Area.findOneAndDelete({_id:id});
    return area;
  }
  async updateArea(id:string, area: AreaCreateDto){
    area.nombre = area.nombre.toUpperCase();
    const areaUpdated = await Area.findByIdAndUpdate(id, area, {new:true});
    return areaUpdated;
  }
  async createArea(area: AreaCreateDto){
    area.nombre = area.nombre.toUpperCase();
    const findArea = await Area.findOne({nombre:area.nombre});
    if(findArea) throw new ApplicationError('El area ya existe')
    const newArea = new Area(area);
    return await newArea.save();
  }
  async createMultipleArea(multipleString: string){
    const areasInserts = [];
    const areas = multipleString.split(',').map(area=>area.trim()).map(area=>({nombre:area.toUpperCase()}));
    for(const area of areas){
      const findArea = await Area.findOne({nombre:area.nombre});
      if(!findArea){
        const newArea = await Area.create(area);
        areasInserts.push(newArea);
      } 
    }
    return areasInserts;
  }
}

export default new AreaService();
