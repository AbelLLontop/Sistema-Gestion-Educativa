export interface IAsignationCreate extends IAsignation {}

export interface IAsignationUpdate extends Partial<IAsignation> {}

export interface IAsignation {
    grade: string;
    section: string;
    areas: any[];
}