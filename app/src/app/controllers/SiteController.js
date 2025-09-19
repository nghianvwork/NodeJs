const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongose');
class Sitecontroller {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('home', { courses: mongooseToObject(courses) });
            })
            .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new Sitecontroller();
