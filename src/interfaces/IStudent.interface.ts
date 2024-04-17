export interface IStudentCreate extends IStudent {}

export interface IStudentUpdate extends Partial<IStudent> {}

export interface IStudent {
  names: string;
  surnames: string;
}
