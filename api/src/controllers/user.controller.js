const db = require("../config/database");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    nickname: req.body.nickname,
    birthday: req.body.birthday,
    gender: req.body.gender,
    role: req.body.role,
  };

  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);

  await db.query(
    "INSERT INTO users (firstname, lastname, nickname, birthday, gender, role, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      user.firstname,
      user.lastname,
      user.nickname,
      user.birthday,
      user.gender,
      user.role,
      user.username,
      user.password,
    ]
  );

  res.status(201).send({
    message: "User has been created successfully",
  });
};

exports.updateUserById = async (req, res) => {
  const user_id = parseInt(req.params.id);
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    nickname: req.body.nickname,
    birthday: req.body.birthday,
    gender: req.body.gender,
  };

  await db.query(
    "UPDATE users SET firstname = $1, lastname = $2, nickname = $3, birthday = $4, gender = $5 WHERE id = $6",
    [
      user.firstname,
      user.lastname,
      user.nickname,
      user.birthday,
      user.gender,
      user_id,
    ]
  );

  res.status(200).send({
    message: "User has been updated successfully",
  });
};

exports.deleteUserById = async (req, res) => {
  const user_id = parseInt(req.params.id);
  await db.query("DELETE FROM users WHERE id = $1", [user_id]);

  res.status(200).send({ message: "deleted successfully!" });
};
