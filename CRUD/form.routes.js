const express = require("express");
const Form = require("../Mongo/form.model");
const router = express.Router();

const {
  getFormbyId,
  UpdatebyId,
  InsertData,
  DeletebyId,
} = require("./form.controller");

router.get("/api/form/:id", getFormbyId);
router.post("/", InsertData);
router.put("/api/form/:id", UpdatebyId);
router.delete("/:id", DeletebyId);

module.exports = router;
