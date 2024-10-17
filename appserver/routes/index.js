var express = require('express'); 
var router = express.Router(); 
var ctrlLocations = require('../controllers/locations'); 
var ctrlothers = require('../controllers/others'); 
var ctrlmain = require('../controllers/main'); 
var ctrlBlog = require('../controllers/blog'); 

router.get('/', ctrlLocations.homelist); 
router.get('/location/SkyFly', ctrlLocations.locationsinfo);  // Changed casing
router.get('/location/JetStream', ctrlLocations.locationsinfo1);  // Changed casing
router.get('/location/CloudWings', ctrlLocations.locationsinfo2);  // Changed casing
router.get('/flight/review/new', ctrlLocations.addReview);
router.post('/submit_review', ctrlLocations.addReview);
router.get('/blog', ctrlBlog.blogList);
router.get('/blog/:id', ctrlBlog.getPost);

router.get('/about', ctrlothers.about); 
router.get('/signin', ctrlmain.signin); 
router.get('/review', ctrlmain.review); 
router.get('/register', function(req, res, next) { 
    res.render('register', { title: 'register' }); 
}); 

module.exports = router; 
