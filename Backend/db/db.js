
import mongoose from "mongoose";

const dbConnection = async() =>{
    try {
            await mongoose.connect(process.env.DB_CONNECTION ,{ 
            useNewUrlParser:true,      //ningun momento muestre la url de conexion
            useUnifiedTopology:true    //evita q saque cosass innecesarias en el log
        });
        console.log("conexion con mongoDB db "); // conexion estable
    } catch (error) {
        console.log("no conexion con mongoDB db \n "+ error); // no conexion 
    }
};

export default {dbConnection};
