import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllServices = () => User.find();

const findByIdUserService = (id) => User.findById(id);
const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

export default {
  createService,
  findAllServices,
  findByIdUserService,
  updateService,
};
