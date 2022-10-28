<<<<<<< ours
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const handlebars = require('express-handlebars');
=======
const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const handlebars = require('express-handlebars')
const route = require('./routes')

>>>>>>> theirs






app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname,"public")))

//HTTP Logger
app.use(morgan('combined'));

// Template engine
<<<<<<< ours
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    return res.send('Hello World!');
});
=======
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set("view engine", 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))




//route init
route(app)
>>>>>>> theirs

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
