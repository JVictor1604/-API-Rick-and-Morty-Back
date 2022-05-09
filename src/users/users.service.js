const User = require("../Models/User");

const findByIdUserService = (idUser) => User.findById(idUser);

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByIdUserService,
};