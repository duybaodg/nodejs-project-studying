const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const coursesRoute = require('./courses');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRoute);
  app.use('/', siteRouter);
}
module.exports = route;
