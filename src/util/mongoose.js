module.exports = {
    mutipleMongooseToObiject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    mongooseToObiject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
