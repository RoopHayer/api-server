'use strict';

const app = require('../src/server.js')
const supertest = require('supertest');
const request = supertest(app.app);
const validator = require('../src/middleware/validator.js')


describe('Testing for validator',  ()=>{
  let req ={method: 'GET', query: {}};
  let res = {status: jest.fn()};
  let next =jest.fn();

  it('Should be able to run with string as a query',  ()=>{
    req.query.name='lol';
    validator(req,res,next)
    expect(next).toHaveBeenCalled();
    })

it('Should be able to throw a 500 on empty query',  ()=>{
  req.query.name = undefined;
  validator(req,res,next)
  expect(next).toHaveBeenCalledWith('Invalid query')
})
})