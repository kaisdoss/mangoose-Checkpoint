// const mongoose = require("mongoose");
// const User = require("./user");
// For access .env important!!
require("dotenv").config();
// // connect to dataBase myFirstDatabase
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected Successfully To DB");
// });

// mongoose.connection.on("error", (error) => {
//   console.error(error);
// });

let mongoose = require('mongoose');
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()