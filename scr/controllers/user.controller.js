import userService from "../services/user.service.js";

const create = async (req, res) => {
  try{
    const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error while creating user" });
  }

  res.status(201).send({
    message: "User created sucessfully!",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
} catch (error) {
  res.status(500).send({ message: "Error" });
}
};

const findAll = async (req, res) => {
 try {const users = await userService.findAllServices();

  if (users.length === 0) {
    return res.status(400).send({ message: "No users found" });
  }

  res.send(users);} catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

const findById = async (req, res) => {
  try{const user = req.user;
  res.send(user);} catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

const update = async (req, res) => {
  try{const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res
      .status(400)
      .send({ message: "Submit at least one field for registration" });
  }

  const { id, user } = req;

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({ message: "User updated sucessfully!" });} catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

export default { create, findAll, findById, update };
