import mongoose from "mongoose";
import { ISeccion } from "../interfaces/ISeccion.interface";

const SeccionSchema = new mongoose.Schema<ISeccion>({
    nombre: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default:true
    },
});
SeccionSchema.set("collection","secciones");
const Seccion = mongoose.model("Seccion",SeccionSchema);
export default Seccion;