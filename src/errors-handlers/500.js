'strict use';


module.exports = function (err,req,res,next){
  // response.status(500).send('Server Error');
  response.status(500);
  response.end();
}
