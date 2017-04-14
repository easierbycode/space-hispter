module.exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app\//,
        'libraries.js': /^(?!app\/)/
      }
    }
  }
};
