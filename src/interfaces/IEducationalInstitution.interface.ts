export interface IEducationalInstitutionCreate extends IEducationalInstitution {}

export interface IEducationalInstitutionUpdate extends Partial<IEducationalInstitution> {}

export interface IEducationalInstitution {
    ie: string;
    modality: string;
    level: string;
    teacher: string;
    ugel: string;
}