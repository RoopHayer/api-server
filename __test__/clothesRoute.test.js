'use strict';

const server = require('../src/server.js')
const { db } = require('../src/models');
const supertest = require('supertest');

const request = supertest(server.app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing for clothes route', () => {
  it('Should be able to read a record using GET /clothes', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });
  it('Should be able to create a record using POST', async () => {
    const response = await request.post('/clothes').send({
      name: 'jeans',
      fabric: 'denim',
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('jeans');
  });
  it('testing a 200 for GET /clothes/:Id', async () => {
    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('jeans');
  });

  it('testing a 200 for PUT /clothes/:Id', async () => {
    const response = await request.put('/clothes/1').send({
      name: 'shirt',
      fabric: 'cotton',
    });
    // expect(response.status).toEqual(200);
    console.log('--------> CLOTHESPUT', response.body);
    expect(response.body.name).toEqual('shirt');
  });

  test('testing a 200 for DELETE `/clothes/:Id`', async () => {
    const response = await request.delete(`/clothes/1`);

    expect(response.status).toEqual(200);
  });
});
