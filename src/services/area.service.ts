import { IArea, IAreaCreate, IAreaUpdate } from '../interfaces/IArea.interface';
import Area from '../model/Area.model';

class AreaService {
  async getArea(): Promise<IArea[]> {
    const areas = await Area.find();
    return areas;
  }
  async createArea(area: IAreaCreate): Promise<IArea> {
    const newArea = new Area(area);
    return await newArea.save();
  }
  async updateArea(id: string, area: IAreaUpdate): Promise<IArea | null> {
    const updatedArea = await Area.findByIdAndUpdate(id, area);
    return updatedArea;
  }
  async deleteArea(id: string): Promise<IArea | null> {
    const area = await Area.findByIdAndDelete(id);
    return area;
  }
}

export default new AreaService();
