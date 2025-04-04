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
  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => res.render('courses/edit', { course: mongooseToObject(course) }))
      .catch(next);
  }
  //[POST] /courses/store
  store(req, res, next) {
    //res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {});
    //res.send('Save!!!');
  }
  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .then(next);
  }
  //DELETE /courses/:id
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}
module.exports = new CourseController();
