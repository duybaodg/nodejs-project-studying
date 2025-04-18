const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');
class SiteController {
  //[GET] /
  async index(req, res, next) {
    // try {
    //   const data = await Course.find({});
    //   res.json(data);
    // } catch (err) {
    //   res.status(400).json({ error: err });
    // }
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);

    //res.render('home');
  }
  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
