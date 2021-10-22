'use strict';

const { db, food } = require('../src/models');

beforeAll (async ()=> {
  await db.sync();
});

afterAll (async ()=> {
  await db.drop();
});


describe('Testing our sequelize model', () => {

  it('Should be able to create a Food item', async () => {

    let newFood = await food.create({
      name: 'Some test words',
      calories: 12345,
    });

    console.log(newFood);
    expect(newFood.id).toBe(1);
    expect(newFood.name).toBe('Some test words');
  });
});

