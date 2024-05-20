import { Request as RequestExpress, Response as ResponseExpress } from 'express';

export type Request<Body = {}, Query = {}> = RequestExpress<IId, {}, Body, Query>;
export type Response<T = {}> = ResponseExpress<T>;
interface IId{
    id: string;
}