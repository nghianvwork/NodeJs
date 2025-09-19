const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongose');
class Mecontroller {
    // [GET] /me/stored/courses
    storedCourses(req, res,next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
        
            .catch(next);
        //   res.render('me/stored-courses');
    }
}
module.exports = new Mecontroller();
