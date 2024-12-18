// // Import necessary modules
// import { createUser } from "../controllers/userController.js"; // Controller to handle user creation logic
// import express from "express"; // Express framework for routing

// // Initialize a router object
// const route = express.Router();

// // Define a POST route for creating a user
// route.post("/create", createUser);
// route.get("/getall", getAll);

// // Export the router for use in other parts of the app
// export default route;

// Import necessary modules

// import { createUser, getAll, getOne } from "../controllers/userController.js"; // Controller for user-related logic
// import express from "express"; // Express framework for routing

// // Initialize a router object
// const route = express.Router();

// // Define a POST route for creating a user
// route.post("/create", createUser);

// // Define a GET route for retrieving all users
// route.get("/getall", getAll);

// route.get("/getone/:id", getOne);

// route.put("/update/:id", updateUser);


// // Export the router for use in other parts of the app
// export default route;

import { createUser,getAll,findUserById,updateUser,DeleteUser } from "../controllers/userController.js"; 
import express from "express"; // Express framework for routing

// Initialize a router object
const route = express.Router();

// Define a POST route for creating a user
route.post("/create", createUser);
route.get("/getall", getAll);
route.get("/finduser/:id",findUserById);
route.put("/update/:id",updateUser);
route.delete("/delete/:id",DeleteUser);
export default route;