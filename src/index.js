const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const handlebars = require('express-handlebars')
const db = require('./config/db')
const route = require('./routes')
const methodOverride = require('method-override');      





//
app.use(methodOverride('_method'));



//connet db
db.connect()

//midderware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname,"public")))

//HTTP Logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a,b) => a + b ,
  }
    
    
}))
app.set("view engine", 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))


route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})