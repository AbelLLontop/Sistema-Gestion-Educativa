export const JWT_KEY = process.env.JWT_KEY!;
export const MONGO_URI = process.env.MONGO_URI!;

export const validateEnv = ()=>{
    if(!MONGO_URI) {
        throw new Error("MONGO_URI must be defined");
    }
    if(!JWT_KEY) {
        throw new Error("JWT_KEY must be defined");
    }
}