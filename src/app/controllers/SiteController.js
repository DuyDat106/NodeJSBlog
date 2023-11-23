const Course = require('../models/Course');
const { mutipleMongooseToObiject } = require('../../util/mongoose');
class SiteController {
    //GET /NEWS
    index(req, res, next) {
        Course.find()
            .then((courses) =>
                res.render('home', {
                    courses: mutipleMongooseToObiject(courses),
                }),
            )
            .catch(next);
    }
    // GET /NEWS:SLUG}
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
