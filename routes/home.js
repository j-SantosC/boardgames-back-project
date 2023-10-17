const path = require('path');

const express = require('express');

const gameController = require('../controllers/game');

const fs = require('fs');

const rootDir = require('../util/path');

const games = require('../db.json');

const router = express.Router();

router.get('/', gameController.getProducts);

router.get('/add-game', (req, res, next) => {
	res.render('add-game', {
		pageTitle: 'Add Product',
		path: '/add-game',
	});
});

// /admin/add-product => POST
router.post('/add-game', gameController.postAddGame);

router.get('/game/:gameId', gameController.getGame);

router.post('/delete-game', gameController.postDeleteGame);

module.exports = router;
