module.exports.index = function(req, res) {
    res.render('index', { title: 'Airlines' });
};
module.exports.signin = function(req, res) {
    res.render('signin', { title: 'Airline Location' });
};
module.exports.review = function(req, res) {
    res.render('review', { title: 'Airline Review' });
};
