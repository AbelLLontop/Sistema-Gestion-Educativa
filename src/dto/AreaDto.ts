import { IArea } from "../interfaces/IArea.interface";

export interface AreaCreateDto extends Omit<IArea, 'status'> {
    text?: string;
    multiple?:boolean
}
export interface AreaUpdateDto extends Omit<IArea, 'status'> {
}