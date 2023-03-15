
const express = require('express')
const parser = require('body-parser')
//const cors = require('cors')

const userManagementRoutes = require('./routes/user_management.js')
const dashboardRoutes = require('./routes/dashboard.js')

const app = express();

//app.use(parser.urlencoded({extended:true})) //This statement parses the form data and automatically uses next
//app.use(cors());
app.use(parser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/user_management', userManagementRoutes)

app.use('/dashboard', dashboardRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page Not Found</h1>')
})

app.listen(8080)