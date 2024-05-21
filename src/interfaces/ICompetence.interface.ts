export interface ICompetenceCreate extends ICompetence {}

export interface ICompetenceUpdate extends Partial<ICompetence> {}
export interface ICompetence{
    descripcion: string;
}