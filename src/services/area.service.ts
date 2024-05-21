import Area from '../model/Area.model';
import { AreaCreateDto } from '../model/dto/AreaDto';

class AreaService {
  async getArea() {
    const areas = await Area.find({status:true});
    return areas;
  }
  async createArea(area: AreaCreateDto){
    const newArea = new Area(area);
    return await newArea.save();
  }
}

export default new AreaService();
