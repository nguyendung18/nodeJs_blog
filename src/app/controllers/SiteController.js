const e = require('express')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course')

class SiteController {


    //[GET] /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req,res) {
        res.render('search')
    }

}


module.exports = new SiteController;