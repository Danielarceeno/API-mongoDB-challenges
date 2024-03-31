const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllServices = () => User.find();

const findByIdService = (id) => User.findById(id);

module.exports = {
    createService,
    findAllServices,
    findByIdService,
};