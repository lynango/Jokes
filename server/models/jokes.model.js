const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
    // _id is automatically created
    setup: {
        type: String},
    punchline: {
        type: String},
    // creates the createdAt and updatedAt 
},  {timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;