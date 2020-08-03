//const products = [];
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const p = path.join(rootDir, 'data', 'Product.json');

module.exports = class Product {
	constructor(t) {
		this.title = t;
	}

	save() {
		//products.push(this);
		let products = [];
		fs.readFile(p, (err, data) => {
			if (!err) {
				products = JSON.parse(data);
			}
			products.push(this);
			console.log(JSON.stringify(products));
			fs.writeFile(p, JSON.stringify(products), err => {
				if (err) console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		if (fs.existsSync(p)) {
			fs.readFile(p, (err, data) => {
				if (err) {
					cb([]);
				}
				cb(JSON.parse(data));
			});
		} else {
			cb([]);
		}
	}
};
