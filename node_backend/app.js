
require('dotenv').config();

const express =require('express');

const app = express();

const path = require('path');

const ejs = require('ejs');

app.set('view engine', 'ejs');

app.set('views', 'views');

// static files

app.use(express.static(path.join(__dirname,'public')));


//routes

const homeroute = require('./app/routes/homeroute');
app.use(homeroute);

const aboutroute =require('./app/routes/aboutroute');
app.use(aboutroute);

const causesroute = require('./app/routes/causesroute');
app.use(causesroute);

const singlecausesroute = require('./app/routes/singlecausesroute');
app.use(singlecausesroute);

const galleryroute = require('./app/routes/galleryroute');
app.use(galleryroute);

const newsroute = require('./app/routes/newsroute');
app.use(newsroute);

const contactroute = require('./app/routes/contactroute');
app.use(contactroute);


// database connection
const DatabaseConnection = require('./app/config/dbconn');

DatabaseConnection();

//define json
app.use(express.json())


const UserApiRoute =require('./app/routes/UserApiRoute');
app.use('/api/v1', UserApiRoute);

const PostApiRoute =require('./app/routes/PostApiRoute');
app.use('/api/p1/', PostApiRoute);

const port = 3000;

app.listen(port,()=>{

    console.log("Server is running on ", port);
});