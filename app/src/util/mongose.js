module.exports = {
    mutipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map((item) =>
            item && typeof item.toObject === 'function'
                ? item.toObject()
                : item,
        );
    },
    mongooseToObject: function (mongoose) {
        return mongoose && typeof mongoose.toObject === 'function'
            ? mongoose.toObject()
            : mongoose;
    },
};
