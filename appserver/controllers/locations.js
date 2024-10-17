module.exports.homelist = function(req, res) {
  res.render('locations-list', {
      title: 'AirFinder - find an airline with premium services',
      pageHeader: {
          title: 'AirFinder',
          strapline: 'Find airlines with premium services and amenities near you!'
      },
      sidebar: "Looking for airlines with premium services? AirFinder helps you locate airlines that offer the best in-flight experiences. " +
          "Perhaps with gourmet meals, extra legroom, or priority boarding? Let AirFinder guide you to the perfect airline.",
      locations: [{
          name: 'SkyFly',
          address: 'Terminal 1, JFK Airport, New York, NY 11430',
          rating: 5,
          facilities: ['First Class', 'In-flight meals', 'WiFi'],
          distance: '10km'
      }, {
          name: 'JetStream',
          address: 'Terminal 4, Heathrow Airport, London, TW6 1EW',
          rating: 4,
          facilities: ['Business Class', 'In-flight entertainment', 'WiFi'],
          distance: '12km'
      }, {
          name: 'CloudWings',
          address: 'Terminal 3, LAX Airport, Los Angeles, CA 90045',
          rating: 3,
          facilities: ['Economy Class', 'Snacks', 'WiFi'],
          distance: '15km'
      }]
  });
};

module.exports.locationsinfo = function(req, res) {
  res.render('locations-info', { title: 'SkyFly' });
};

module.exports.locationsinfo1 = function(req, res) {
  res.render('locations-info1', { title: 'JetStream' });
};

module.exports.locationsinfo2 = function(req, res) {
  res.render('locations-info2', { title: 'CloudWings' });
};

module.exports.addReview = function(req, res) {
  res.render('locations-review-form', { title: 'ADD AIRLINE REVIEW' });
};
