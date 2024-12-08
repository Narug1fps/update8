import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conectado ao MongoDB com sucesso!' )
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
    }
}
  
  export default connectToDatabase;