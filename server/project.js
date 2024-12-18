// import dotenv from "dotenv";
// import express from 'express';
// import bodyparser from 'body-parser' ;             
// import mongoose from "mongoose";
// import route from './routes/userRoutes.js'
// dotenv.config();
// import User from './models/userModels.js';

// const app=express();
// const port=process.env.PORT;
// const url=process.env.MONGOOSE_URL;

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));
// // ,{useNewUrlParser:true,useUnifiedTopology:true})
// mongoose.connect(url)
//     .then(()=>{
        
//         app.listen(port,()=>{
//         console.log(`Server is running on http://localhost:${port}`);
//     })}
        
//     )
//     .catch((err)=>console.error("Connection Failed",err))

//     async function create_User()
//     {
//         const user = new User({   
//             name:"Bhavin",
//             email:"bhavintewani423@gmail.com",
//             password:"2468",
//             age:20
//              });
//              const result = await user.save();
//              console.log("User Created :",result);
//     }
//     create_User();
// app.use('api','route');



// ---------------------------------



// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import route from './routes/userRoutes.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT;
// const URL = process.env.MONGO_URL;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))

// console.log(PORT);

// app.get("/", (req, res) => {
//     res.send("Hello");
// });

// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("DB connected successfully");
//         app.listen(PORT, () => {
//             console.log(`Server is running on http://localhost:${PORT}`);
//         });
//     })
//     .catch((err) => console.error("Connection Failed :", err));

// app.use('/api', route);

// -----------------------------

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './routes/userRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;

// Built-in body parsing middleware (replaces body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log the PORT to verify
console.log(`Port: ${PORT}`);

// Basic GET Route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection Failed:", err);
  });

// Use routes middleware
app.use('/api', route);