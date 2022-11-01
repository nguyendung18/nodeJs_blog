const e = require('express')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course')

class MeController {
    // [GET] /me/courses
    storeCourses(req,res,next) {
        Course.find({})
            .then(course => res.render('me/stored-courses',{
                course: mutipleMongooseToObject(course)
            }))
            .catch(next)
    }

}


module.exports = new MeController;