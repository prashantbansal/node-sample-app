const products = [];

exports.getAddProduct = (req, res, next) => {
    console.log('in middleware');
    //res.sendFile(path.join(rootDir,'views', 'add-product.html'));
    res.render("add-product",{
        pageTitle:'Add Product dynamic', 
        path: 'admin/add-product',
        formsCSS: true
    })
   };


 exports.postAddProduct =  (req, res, next) =>{
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    console.log('in middleware');
    console.log('shop.js', products);
    //res.sendFile(path.join(rootDir, 'views','shop.html'));
    res.render('shop', {
        prods: products, 
        pageTitle: 'shop title', 
        path: '/shop', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
   };