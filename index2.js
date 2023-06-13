const Express = require("express")
//  line 1 Imports the Express module./
require("./Config/database")
// Requires a module for database configuration 
const port = 3500;
// Sets the port number.

const app = Express();
// Creates an instance of the Express application.

app.use(Express.json());
// Adds middleware to parse JSON requests.

app.get("/", (req, res) => {
    res.status(200).json({
        message: "set07 API is ready for consumption"
    })
});
// Defines a route for the root path ("/") with a JSON response.

app.listen(port, () =>{
    console.log("");
    console.log("server is ready");
});
// Starts the server and logs a message to the console.


