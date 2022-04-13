const express = require(`express`);

const userController = require(`../controllers/auth`);

const router = express.Router();

router.get('/listLatLng', userController.ListLatLng)


module.exports = router;