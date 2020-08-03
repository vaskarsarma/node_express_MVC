const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const p = path.join(rootDir, 'data', 'Product.json');

const getProductFromFile = cb => {
	fs.readFile(p, (err, data) => {
		if (err) {
			return cb([]);
		}
		cb(JSON.parse(data));
	});
};

module.exports = class Product {
	constructor(t) {
		this.title = t;
	}

	save() {
		getProductFromFile(products => {
			products.push(this);
			console.log(JSON.stringify(products));
			fs.writeFile(p, JSON.stringify(products), err => {
				if (err) console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		if (fs.existsSync(p)) {
			getProductFromFile(cb);
		} else {
			cb([]);
		}
	}
};
