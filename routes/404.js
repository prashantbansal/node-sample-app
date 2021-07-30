const path = require("path");
const rootDir = require('../util/path');
const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  //res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render('404',{pageTitle: 'EJS-Page not found'});
});

module.exports = router;
