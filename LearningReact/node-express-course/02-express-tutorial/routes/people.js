const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPeople,
  CreatePersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);

// router.post("/", createPeople);

// router.post("/postman", CreatePersonPostman);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPeople);
router.route("/postman").post(CreatePersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
