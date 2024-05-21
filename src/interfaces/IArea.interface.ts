import { ICompetence } from "./ICompetence.interface";

export interface IAreaCreate extends IArea {}

export interface IAreaUpdate extends Partial<IArea> {}

export interface IArea {
    nombre: string;
    competencias: [ICompetence],
    status: boolean;
}