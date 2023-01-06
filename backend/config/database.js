const mongoose = require('mongoose');
const MONGO_URI = "mongodb://0.0.0.0:27017/abase";

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;