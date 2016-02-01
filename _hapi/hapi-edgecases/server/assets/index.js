// These are the public assets. Goal is to serve css, js, partials, images, or bower packages.
exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/partials/{path*}',
    config: {
      handler: {
        directory: {path: './server/views/partials'}
      },
      id: 'partials'
    }
  });

  server.route({
    method: 'GET',
    path: '/images/{path*}',
    config: {
      handler: {
        directory: {path: './public/images'}
      },
      id: 'images'
    }
  });

  server.route({
    method: 'GET',
    path: '/css/{path*}',
    config: {
      handler: {
        directory: {path: './public/css'}
      },
      id: 'css'
    }
  });

  server.route({
    method: 'GET',
    path: '/js/{path*}',
    config: {
      handler: {
        directory: {path: './public/js'}
      },
      id: 'js'
    }
  });

  server.route({
    method: 'GET',
    path: '/bower_components/{path*}',
    config: {
      handler: {
        directory: {path: './public/bower_components'}
      },
      id: 'bower'
    }
  });

  next();
};

exports.register.attributes = {
  name: 'assets'
};