const Course = require('../models/Course');
const { mutipleMongooseToObiject } = require('../../util/mongoose');
class MeController {
    //GET /me/stores/courses

    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObiject(courses),
                }),
            )
            .catch(next);
    }
    //GET /me/trash/courses

    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObiject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
