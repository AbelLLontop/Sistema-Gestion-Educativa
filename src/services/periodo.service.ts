import { IPeriodo, IPeriodoCreate, IPeriodoUpdate } from '../interfaces/IPeriodo.interface';
import Periodo from '../model/Periodo.model';

class PeriodoService {
  async getPeriodo(): Promise<IPeriodo[]> {
    const periodos = await Periodo.find();
    return periodos;
  }
  async createPeriodo(periodo: IPeriodoCreate): Promise<IPeriodo> {
    const newPeriodo = new Periodo(periodo);
    return await newPeriodo.save();
  }
  async updatePeriodo(id: string, periodo: IPeriodoUpdate): Promise<IPeriodo | null> {
    const updatedPeriodo = await Periodo.findByIdAndUpdate(id, periodo);
    return updatedPeriodo;
  }
  async deletePeriodo(id: string): Promise<IPeriodo | null> {
    const periodo = await Periodo.findByIdAndDelete(id);
    return periodo;
  }
}

export default new PeriodoService();
