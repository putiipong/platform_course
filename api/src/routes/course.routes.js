const router = require("express-promise-router")();
const courseController = require("../controllers/course.controller");
const { authentication } = require("../middleware/authentication");

// ==> Definindo as rotas do CRUD - 'Product':

//(POST): localhost:3000/api/course
router.post("/course", authentication, courseController.createCourse);
router.get("/course", authentication, courseController.allCourse);
router.get("/course/:id", authentication, courseController.findCourseById);
router.put("/course/:id", authentication, courseController.updateProductById);
router.delete(
  "/course/:id",
  authentication,
  courseController.deleteProductById
);
module.exports = router;
