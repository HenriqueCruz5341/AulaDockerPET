const router = require("express").Router();
const userController = require("../controllers/UserController");
const multer = require("multer");
const multerConfig = require("../utils/multer");

router.get("/", userController.index);
router.post("/", multer(multerConfig).single("image"), userController.store);

module.exports = router;
