'use strict';
 
module.exports = function(req,res,next){
  let name =req.query.name;
  if(name){
    next();
  }else{
   next('Invalid query');
  }
}