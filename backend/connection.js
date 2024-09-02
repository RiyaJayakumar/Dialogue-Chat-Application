const mongoose = require('mongoose');
// require('dotenv').config();

mongoose.connect(
  `enter mongodb uri here`,
  (err) => {
   if(err) console.log(err) 
   else console.log("MongoDB connection established!");
  }
);


