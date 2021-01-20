const express = require(`express`);

const userController = require(`../controllers/auth`);

const router = express.Router();

router.put(`/create-user`, userController.createUser);

module.exports = router;