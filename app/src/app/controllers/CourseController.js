const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongose');
class Coursecontroller {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })

            .then((courses) => {
                res.render('courses/show', {
                    courses: mongooseToObject(courses),
                });
                console.log(courses);
            })

            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }
 edit(req, res, next) {
        Course.findById(req.params.id)
              .then( course =>  res.render('courses/edit', {
          course : mongooseToObject(course)}) )
       .catch(next);
    }
   update(req, res, next) {
     Course.updateOne({_id: req.params.id}, req.body)
     .then(() => res.redirect('/me/stored/courses'))
     .catch(next); 
}
    store(req, res, next) {
        //    res.json(req.body);
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
  
}
module.exports = new Coursecontroller();
