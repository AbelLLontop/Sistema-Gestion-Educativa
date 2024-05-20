import {  IAsignationCreate, IAsignationUpdate } from '../interfaces/IAsignation.interface';
import Asignation from '../model/Asignation.model';

class AsignationService {
  async getAsignation() {
    const asignations = await Asignation.find();
    return asignations;
  }
  async createAsignation(asignation: IAsignationCreate) {
    const newAsignation = new Asignation(asignation);
    return await newAsignation.save();
  }
  async updateAsignation(id: string, asignation: IAsignationUpdate) {
    const updatedAsignation = await Asignation.findByIdAndUpdate(id, asignation);
    return updatedAsignation;
  }
  async deleteAsignation(id: string){
    const asignation = await Asignation.findByIdAndDelete(id);
    return asignation;
  }
}

export default new AsignationService();
