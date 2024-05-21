import { IArea } from "../../interfaces/IArea.interface";

export interface AreaCreateDto extends Omit<IArea, 'status'> {
}