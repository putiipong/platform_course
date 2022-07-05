const db = require("../config/database");

exports.createCourse = async (req, res) => {
  const {
    name,
    description,
    category,
    image,
    subject,
    number_of_student,
    start_time,
    end_time,
    image_person,
    price,
  } = req.body;
  await db.query(
    "INSERT INTO courses (name, description, category, image, subject, number_of_student, start_time, end_time, image_person, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [
      name,
      description,
      category,
      image,
      subject,
      number_of_student,
      start_time,
      end_time,
      image_person,
      price,
    ]
  );
  res.status(201).send({
    message: "Course added successfully!",
  });
};

exports.allCourse = async (req, res) => {
  const response = await db.query("SELECT * FROM courses");

  res.status(200).send(response.rows);
};

exports.findCourseById = async (req, res) => {
  const course_id = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM courses WHERE id = $1", [
    course_id,
  ]);

  res.status(200).send(response.rows);
};

exports.updateProductById = async (req, res) => {
  const course_id = parseInt(req.params.id);
  const {
    name,
    description,
    category,
    image,
    subject,
    number_of_student,
    start_time,
    end_time,
    image_person,
    price,
  } = req.body;

  await db.query(
    "UPDATE courses SET name = $1, description = $2, category = $3, image = $4, subject = $5, number_of_student = $6, start_time = $7, end_time = $8, image_person = $9, price = $10  WHERE id = $11",
    [
      name,
      description,
      category,
      image,
      subject,
      number_of_student,
      start_time,
      end_time,
      image_person,
      price,
      course_id,
    ]
  );

  res.status(200).send({ message: "Course Updated Successfully!" });
};

exports.deleteProductById = async (req, res) => {
  const course_id = parseInt(req.params.id);
  await db.query("DELETE FROM courses WHERE id = $1", [course_id]);

  res.status(200).send({ message: "Course deleted successfully!" });
};
