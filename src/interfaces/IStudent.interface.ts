export interface IStudentCreate extends IStudent {}

export interface IStudentUpdate extends Partial<IStudent> {}

export interface IStudent {
  nombres: string;
  apellidos: string;
  codigo:string;
  status: boolean;
}
