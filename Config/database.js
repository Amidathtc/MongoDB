const mongoose = require("mongoose")
// This line imports the Mongoose library,
//  which is a popular Object-Document Mapping (ODM) library for MongoDB in Node.js. 
// It allows us to interact with MongoDB 
//  in a more convenient and structured manner.
const set07DB = "mongodb://0.0.0.0:27017/set07Database"

//On this line we have our variable name "set07DB" it is declared and assigned 
//a string value representing the connection url for monogoDB database//

const Database = async() => {
    // this line declares a function named "Database"
   //using the arrow function syntax. this is
   //responsible for the seting up the connection to the MongoDb
    try{
        const dbconnect = await mongoose.connect(set07DB)
        //This line uses the "await " keyword to connect to the MongoDb database specified by the 'set07DB'
        //url using the Mongoose connect() method
        console.log("");
        console.log(`Database is connected to ${dbconnect.connection.host}`)

        //if the connection is successful ,this part console.log a success message indicating that
        //the database is connected and it also includes the host information of the connected db
    } catch (error) {
     console.log("An error occured while connecting to database", error)
    }
}

module.exports = Database()
// This line exports the Database as a module making it available for use in other 
//parts of the application when the module is imported

