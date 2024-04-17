export interface IQualificationCreate extends IQualification {}

export interface IQualificationUpdate extends Partial<IQualification> {}

export interface IQualification {
    student:any,
    grade:string,
    section:string,
    notas:{
        area:any,
        competences:{
            competence:any,
            periodo:any,
            nota:number
        },
        promedio:number
    }[]
}