const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');
class CourseController {
  show(req, res, next) {
    //[GET] /courses/:slug
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
    //res.send('Course Detail - ' + req.params.slug);
  }
}
module.exports = new CourseController();
