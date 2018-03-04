let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    mongoose = require('mongoose'),
    User = require('./api/user/userModel'),
    middleware = require('./api/utils/middleware'),
    userRoutes = require('./api/user/userRoutes'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Userdb');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(middleware.userAuth);
userRoutes(app);
app.use(middleware.notFound);

app.listen(port);


console.log('HouglateFest server started on: ' + port);