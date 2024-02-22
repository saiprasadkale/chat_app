const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const router = express.Router();
router.route("/").post(registerUser).get(allUsers);// allUsers for searching users.
router.post("/login", authUser);
module.exports = router;
