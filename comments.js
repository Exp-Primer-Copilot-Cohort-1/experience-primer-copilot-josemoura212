// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var comments = [];

// Create server
var server = http.createServer(function(req, res) {
  // Parse URL
  var parseObj = url.parse(req.url, true);
  var pathName = parseObj.pathname;
  if (pathName === '/') {
    fs.readFile('./views/index.html', function(err, data) {
      if (err) {
        return res.end('404 Not Found.');
      }
      res.end(data);
    });
  } else if (pathName === '/post') {
    fs.readFile('./views/post.html', function(err, data) {
      if (err) {
        return res.end('404 Not Found.');
      }
      res.end(data);
    });
  } else if (pathName.indexOf('/public/') === 0) {
    fs.readFile('.' + pathName, function(err, data) {
      if (err) {
        return res.end('404 Not Found.');
      }
      res.end(data);
    });
  } else if (pathName === '/pinglun') {
    // Get query string
    var comment = parseObj.query;
    comments.push(comment);
    // Redirect to home page
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  } else {
    fs.readFile('./views/404.html', function(err, data) {
      if (err) {
        return res.end('404 Not Found.');
      }
      res.end(data);
    });
  }
});
