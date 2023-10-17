const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Game {
	constructor(title, price, description, imageUrl) {
		this.title = title;
		this.price = price;
		this.description = description;
		this.imageUrl = imageUrl;
	}

	save() {
		const db = getDb();
		return db
			.collection('games')
			.insertOne(this)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static fetchAll() {
		const db = getDb();
		return db
			.collection('games')
			.find()
			.toArray()
			.then((games) => {
				return games;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static findById(id) {
		const db = getDb();
		return db
			.collection('games')
			.find({ _id: new mongodb.ObjectId(id) })
			.next()
			.then((product) => {
				console.log(product);
				return product;
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static deleteById(id) {
		const db = getDb();
		return db
			.collection('games')
			.deleteOne({ _id: new mongodb.ObjectId(id) })
			.then((result) => console.log('Deleted'));
	}
}

module.exports = Game;
