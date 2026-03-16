
import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        const con=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`Dtabase is connected successfuly, ${con.connection.name}`)
        console.log(con.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDb