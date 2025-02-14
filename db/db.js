const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.DB_URI) //connect to the database   
    .then(()=>{
        console.log('connected to the database');
    }).catch(error=>{
        console.log('error connecting to the database',error.message);}
    )}

module.exports = connectToDb;