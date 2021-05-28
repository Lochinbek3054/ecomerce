const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');                   
const mongoose = require('mongoose');           

//routes
const userRoutes = require('./routes/user'); 

//environment variable or you can say constants
env.config();

//mongodb connection 
//mongodb+srv://root:<password>@cluster0.ijhjw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ijhjw.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected');  
});

app.use(bodyParser());
app.use('/api', userRoutes);

// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Hello from Server' 
//     });
// });

// app.post('/data', (req, res, next) => {
//     res.status(200).json({
//         message: req.body
//     }); 
// });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

