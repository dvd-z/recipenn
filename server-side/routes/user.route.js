const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.post("/create_user", user_controller.create_user );
router.post("/delete_user", user_controller.delete_user );
router.post("/add_ingredients", user_controller.add_ingredients);
router.post("/remove_ingredient", user_controller.remove_ingredient);
router.post("/remove_all_ingredients", user_controller.remove_all_ingredients);

module.exports = router;