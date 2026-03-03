const express = require("express");
const { getEmp, createEmp, updateEmp, deleteEmp } = require("./emp.controller");
const { model } = require("mongoose");

const router = express.Router();

router.get("/", getEmp);
router.post("/add", createEmp);
router.put("/update/:id", updateEmp);
router.delete("/delete/:id", deleteEmp);

module.exports = router;
