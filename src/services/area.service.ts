import { IAreaCreate, IAreaUpdate } from '../interfaces/IArea.interface';
import Area from '../model/Area.model';

class AreaService {
  async getArea(){
    const areas = await Area.find();
    return areas;
  }
  async createArea(area: IAreaCreate){
    const newArea = new Area(area);
    return await newArea.save();
  }
  async updateArea(id: string, area: IAreaUpdate) {
    const updatedArea = await Area.findByIdAndUpdate(id, area);
    return updatedArea;
  }
  async deleteArea(id: string) {
    const area = await Area.findByIdAndDelete(id);
    return area;
  }
}

export default new AreaService();
