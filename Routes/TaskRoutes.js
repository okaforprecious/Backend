const express = require("express");
const { CreateTask, GetAllTask } = require("../Controllers/Taskcontroller");

const router = express.Router();
router.post("/", CreateTask);

router.get("/", GetAllTask);


module.exports = router;
