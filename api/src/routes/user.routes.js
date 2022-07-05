const router = require("express-promise-router")();
const userController = require("../controllers/user.controller");
const { authentication } = require("../middleware/authentication");

router.post("/register", userController.createUser);
router.put("/user/:id", authentication, userController.updateUserById);
router.delete("/user/:id", authentication, userController.deleteUserById);
module.exports = router;
