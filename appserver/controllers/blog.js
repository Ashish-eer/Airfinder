// appserver/controllers/blog.js

// Sample blog posts in-memory
const blogPosts = [
    { id: 1, title: 'Exploring the Wonders of Bali', date: '2023-10-01', summary: 'A journey through the beautiful landscapes of Bali. Bali is known for its stunning beaches, vibrant culture, and delicious cuisine. Whether you’re looking to relax or seek adventure, Bali offers a wide array of activities, from surfing the waves to exploring lush rice terraces.' },
    { id: 2, title: 'Top 10 Travel Tips for 2024', date: '2023-09-15', summary: 'Get ready for your next adventure with these essential tips. Traveling can be overwhelming, but with the right preparation, it can be an enjoyable experience. Research your destination, pack wisely, and don’t forget to keep your travel documents organized!' },
    { id: 3, title: 'A Weekend in Paris', date: '2023-08-20', summary: 'Discovering the charm of the City of Lights. Paris is a city that captivates every traveler with its romantic ambiance, iconic landmarks like the Eiffel Tower, and delightful cuisine. Enjoy a weekend filled with art, culture, and exquisite dining.' },
  ];
  
  exports.blogList = function(req, res) {
      res.render('blog', {
        title: 'Travel Blog',
        blogPosts: blogPosts
      });
  };
  
  exports.getPost = function(req, res) {
      const postId = parseInt(req.params.postId, 10); // Get the post ID from the URL
      const post = blogPosts.find(p => p.id === postId); // Find the post by ID
  
      if (!post) {
          return res.status(404).send('Post not found');
      }
  
      res.render('blogPost', { title: post.title, post });
  };
  