import { IAsignation, IAsignationCreate, IAsignationUpdate } from '../interfaces/IAsignation.interface';
import Asignation from '../model/Asignation.model';

class AsignationService {
  async getAsignation(): Promise<IAsignation[]> {
    const asignations = await Asignation.find();
    return asignations;
  }
  async createAsignation(asignation: IAsignationCreate): Promise<IAsignation> {
    const newAsignation = new Asignation(asignation);
    return await newAsignation.save();
  }
  async updateAsignation(id: string, asignation: IAsignationUpdate): Promise<IAsignation | null> {
    const updatedAsignation = await Asignation.findByIdAndUpdate(id, asignation);
    return updatedAsignation;
  }
  async deleteAsignation(id: string): Promise<IAsignation | null> {
    const asignation = await Asignation.findByIdAndDelete(id);
    return asignation;
  }
}

export default new AsignationService();
