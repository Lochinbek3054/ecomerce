const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');           

const app = express();
const bodyParser = require('body-parser');                   

//routes
const authRoutes = require('./routes/auth') 
const adminRoutes = require('./routes/admin/auth')
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
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
// app.get('https://github.com/users/Lochinbek3054', (req, res, next) => {
//     res.status(200).json({
//         message: 'Hello from Server' 
//     });
// });
// _user.save((error, data) => {
//     if (error) {
//       return res.status(400).json({
//         message: "Error while User creating ",
//       });
//     }
//     if (data) {
//       return res.status(201).json({
//         user: data,
//       });
//       console.log("User created", data);
//     }
//   });

// app.post('/data', (req, res, next) => {
//     res.status(200).json({
//         message: req.body
//     }); 
// });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

