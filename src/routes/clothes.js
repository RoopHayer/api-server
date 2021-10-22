'use strict';

const express = require('express');
const { clothes } = require('../models');

const router = express.Router();

router.get('/', getAllClothes);
router.get('/:id', getOneClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);


async function getOneClothes(request, response) {
  
  const id = request.params.id;
  const foundClothes = await clothes.findByPk(parseInt(id));
  response.status(200);
  response.send(foundClothes);
}

async function getAllClothes(request, response, next) {
  try {

    const foundAllClothes = await clothes.findAll(); 
    response.status(200);
    response.send(foundAllClothes);

  } catch(e) {


    next(e);
  }
}

async function createClothes(request, response, next) {
  try {

    const newClothes = await clothes.create({
      name: request.body.name,
      size: request.body.size,
    });

    response.status(201); 
    response.send(newClothes);

  } catch(e) {
    next(e);
  }
}


async function updateClothes(request, response, next) {
  try {
    const id = parseInt(request.params.id);

    const foundClothes = await clothes.findByPk(id);

    const updatedClothes = await foundClothes.update(request.body);

    response.status(200);
    response.send(updatedClothes);
  } catch (e) {
    next(e);
  }
}

async function deleteClothes(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const foundClothes = await clothes.findByPk(id);
    const deletedClothes = await foundClothes.destroy(req.body);
    res.status(200);
    res.send(deletedClothes);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
