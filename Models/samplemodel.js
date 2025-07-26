const mongoose = require ("mongoose")


const SampleSchema = mongoose.Schema( 
  { 






    }, 
    { 
         timestamps: true, 
    } 
    ); 
   
    module.exports = mongoose.model("Task", SampleSchema);