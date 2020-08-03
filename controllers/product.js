const products = [];

exports.getAddProduct = (req, res, next) => {
	//res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
	res.render('add-product', {
		docTitle: 'Add Product - Test MVC',
		productCss: true,
		formsCss: true,
		activeshop: false,
		activeadmin: true,
		path: '/admin/add-product',
	});
};

exports.postAddProduct = (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect('/');
};

exports.getProducts = (req, res, next) => {
	//console.log('shop.js', adminData.products);
	//res.sendFile(path.join(rootDir, 'views', 'shop.html'));
	res.render('shop', {
		prods: products,
		docTitle: 'Shop - Test MVC',
		productCss: true,
		activeshop: true,
		activeadmin: false,
		hasProducts: products.length > 0,
		path: '/',
	});
};
