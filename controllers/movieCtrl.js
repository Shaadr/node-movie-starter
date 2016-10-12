var movies = require('../movies.json');

module.exports = {
    get: function(req, res, next){
      //http://localhost:3000/api/movies?page=18&pageSize=24
      var page = (req.query.page || 1) / 1;  //give me a page, if there is no page default to 1
      var pageSize = (req.query.pageSize || 20) / 1; //PARAMS come as STRINGS  ("string") / 1 converts to number
      var startIndex = (page - 1) * pageSize;

      var first20Movies = movies.slice(startIndex, startIndex + pageSize);
      res.send(first20Movies);
    },
    getById: function(req, res, next){
      //https://localhost:3000/api/movie/85
        var movieId = req.params.movieId;
        var movie = movies[movieId];

        var responseObj = {
          message: "You asked for movie ID " + movieId,
          movie: movie
        }

        res.send(responseObj);

    },
    modify: function(req, res, next){
      //which item to modify
      //what to data to change it to
      //http://localhost:3000/api/movies/272?Worldwide_Gross=20000
      var movieId = req.params.movieId; //.movieId matches "/:id"
      for(var p in req.query) {
        if(req.query.hasOwnProperty(p) && movieId.hasOwnProperty(p)) {
          movieId[p] = req.query[p]
          // conosle.log(movieId[p], req.query[p])
        }
      }
      res.end();
    },
    add: function(req, res, next){
        movies.push(req.body);
        res.statsus(200).end();
    },
    delete: function(req, res, next){
      movies.splice(req.params.movieId, 1)
      res.status(200).end();
    }
}
