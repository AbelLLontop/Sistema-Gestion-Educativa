import mongoose from "mongoose";
import { IGrado } from "../interfaces/IGrado.interface";

const GradoSchema = new mongoose.Schema<IGrado>({
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

GradoSchema.set("collection","grados");
const Grado = mongoose.model("Grado",GradoSchema);
export default Grado;