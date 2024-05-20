export interface ICompetenceCreate extends ICompetence {}

export interface ICompetenceUpdate extends Partial<ICompetence> {}

export interface ICompetence{
    periodo:any,
    descripcion: string;
    code: string; 
    area:any;  
}