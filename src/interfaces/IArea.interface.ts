export interface IAreaCreate extends IArea {}

export interface IAreaUpdate extends Partial<IArea> {}

export interface IArea {
    name: string;
    competences: any[];
}