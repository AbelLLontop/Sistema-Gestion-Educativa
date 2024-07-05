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
    const areaUpdated = await Area.findByIdAndUpdate(id, area, {new:true});
    return areaUpdated;
  }
  async createArea(area: AreaCreateDto){
    const newArea = new Area(area);
    return await newArea.save();
  }
}

export default new AreaService();
