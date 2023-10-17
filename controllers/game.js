const Game = require('../models/game');

exports.getGame = (req, res, next) => {
	const id = req.params.gameId;
	Game.findById(id)
		.then((game) => {
			res.render('game-detail', {
				game: game,
				id: id,
			});
		})
		.catch((err) => console.log(err));
};

exports.postAddGame = (req, res, next) => {
	const title = req.body?.title;
	const imageUrl = req.body?.imageUrl;
	const price = req.body?.price;
	const description = req.body?.description;
	const game = new Game(title, price, description, imageUrl);
	game.save()
		.then((result) => {
			console.log('Created Product');
			res.redirect('/');
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getProducts = (req, res, next) => {
	Game.fetchAll()
		.then((games) => {
			res.render('home', {
				games: games,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postDeleteGame = (req, res, next) => {
	const id = req.body.gameId;
	Game.deleteById(id)
		.then((result) => {
			console.log('DESTROYED PRODUCT');
			res.redirect('/');
		})
		.catch((err) => console.log(err));
};
