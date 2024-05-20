export interface IQualificationCreate extends IQualification {}

export interface IQualificationUpdate extends Partial<IQualification> {}

export interface IQualification {
    student:any,
    grade:string,
    competencia:object,
    score: number;
}