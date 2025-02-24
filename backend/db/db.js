import mongoose from "mongoose";

console.log(process.env.MONGODB_URI);


function connect(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to MongoDb");
    })
    .catch(error => {
        console.log(error);
    })
}

export default connect;