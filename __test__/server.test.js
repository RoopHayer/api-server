'use strict';

const app = require('../src/server.js')
const supertest = require('supertest');
const request = supertest(app.app);

describe('Testing for name in query string on GET /Person',  ()=>{
  
  let response = {};

  it('Should be able to throw a 404 on a bad route', async ()=>{
     response = await request.get('/people')
    expect(response.status).toBe(404)
  })

  
  it('Should be able to throw a 404 on a bad method', async ()=>{
     response = await request.put('/person')
    expect(response.status).toBe(404)
  })

})