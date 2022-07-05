const db = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);

  if (!user.rows[0]) {
    return res.status(404).json({
      message: "user not found",
      status: 404,
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.rows[0].password);

  if (!isValidPassword) {
    return res.status(401).json({
      message: "password not valid",
      status: 401,
    });
  }

  const token = jwt.sign(
    {
      id: user.rows[0].id,
      firstname: user.rows[0].firstname,
      lastname: user.rows[0].lastname,
      nickname: user.rows[0].nickname,
      birthday: user.rows[0].birthday,
      gender: user.rows[0].gender,
      role: user.rows[0].role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: 90000000000,
    }
  );

  return res.json({
    message: "login succesfully",
    token,
  });
};
