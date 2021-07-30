const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/create-planner', homeController.create);
router.get('/delete-item', homeController.delete);

module.exports = router;