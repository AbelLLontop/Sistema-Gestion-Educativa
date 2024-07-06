import Area from '../model/Area.model';
import { AreaCreateDto } from '../model/dto/AreaDto';

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
    const newArea = new Area(area);
    return await newArea.save();
  }
  async createMultipleAreas(areas: AreaCreateDto[]){
    areas = areas.map(area => {
      area.nombre = area.nombre.toUpperCase();
      return area;
    });
    return await Area.insertMany(areas);
  }
}

export default new AreaService();
