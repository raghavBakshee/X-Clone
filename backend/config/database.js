import mongoose from 'mongoose';


const MONGO_URL = process.env.MONGO_URI;

const dbConnection = () => {
    mongoose.connect(MONGO_URL).then(()=>{
        console.log('DB Connected..');
    }).catch((error)=>{console.log(error)});
}

export default dbConnection;