import { Request, Response } from 'express';

export type RequestBody<B = {}> = Request<{}, {}, B>;
export type RequestParams<Params = {}> = Request<Params, {}, {}>;
export type RequestQuery<Query = {}> = Request<{}, {}, {}, Query>;
export type RequestAll<Body = {}, Params = {}, Query = {}> = Request<Params, {}, Body, Query>;
export type ResponseEntity<T = {}> = Response<T>;
