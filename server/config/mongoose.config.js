const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/jokesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the jokesDB database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

