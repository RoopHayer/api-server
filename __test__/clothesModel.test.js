'use strict';

const { db, clothes } = require('../src/models');

beforeAll (async ()=> {
  await db.sync();
});

afterAll (async ()=> {
  await db.drop();
});


describe('Testing our sequelize model', () => {

  it('Should be able to create a Cloth item', async () => {

    let newClothes = await clothes.create({
      name: 'Some test words',
      calories: 12345,
    });

    console.log(newClothes);
    expect(newClothes.id).toBe(1);
    expect(newClothes.name).toBe('Some test words');
  });
});

