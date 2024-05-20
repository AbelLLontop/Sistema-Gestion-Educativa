import bcrypt from "bcrypt";

const encrypt = async(text:string)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(text,salt);
        return hashed;
    }catch(e){
        throw new Error("Error al encriptar: " + (e as Error).message )
    }
}

const compareEncrypt = async(text:string,hashed:string) =>{
    try{
        const match = await bcrypt.compare(text,hashed);
        return match;
    }catch(e){
        return false;
    }
}

export default {
    encrypt,
    compareEncrypt
}