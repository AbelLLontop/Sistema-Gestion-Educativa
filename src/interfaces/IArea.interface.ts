export interface IAreaCreate extends IArea {}

export interface IAreaUpdate extends Partial<IArea> {}

export interface IArea {
    nombre: string;
    competencias: [{
        codigo: string;
        descripcion: string;
        periodo:string;
    }]
}