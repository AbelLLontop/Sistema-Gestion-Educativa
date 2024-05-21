import "dotenv/config";
import app from "./src/app";
import mongoose from "mongoose";
import { MONGO_URI, validateEnv } from "./src/config/constants";

validateEnv();
app.listen(3000, async () => {
    try{
        console.log("Server is running on port 3000");
        await mongoose.connect(MONGO_URI);
        console.log("Database connected");
    }catch(err){
        console.log(err);
    }
});
