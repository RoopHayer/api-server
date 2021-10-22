'strict use';


module.exports = function (err,req,res,next){
  response.status(404).send('Not-Found');
  next();
}
