'use strict';

const logger = require ('../src/middleware/logger.js')
const error = require('../src/errors-handlers/404.js')


describe('Testing for logger', ()=>{
  let req ={method: 'GET'};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('Should be able to log GET method', ()=>{
    logger(req,res,next);
    expect(console.log).toHaveBeenCalledWith('GET');
    
  })

  it('Should be able to go to next function', ()=>{
    logger(req,res,next);
    expect(next).toHaveBeenCalled();
  })
})
